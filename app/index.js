//Bu şekilde de dahil edilirdi. IES Modüllerini kullanmak için package.json' kısmına gidip ' "type": module 'kodunu main altına eklemek gerekirdi.
// import express from 'express'
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'

const express = require("express")
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

//Bu metot'un yaptığı şey, Ortam değişkenleri dosyasının içerisindeki bütün anahtar değerleri buraya explose ediyor.
//tüm ortam değişkenleri .env dosyası içerisinde olacak.
dotenv.config()

//Bir server uygulaması oluşturur.
const app = express()

//Expressin json verileri çağrıldı. Bir middleware döndürüyor. Content-Type başlığının eşleştiği isteklere bakıyor.
app.use(express.json())

//Bu içerikte veritabanı kullanılmadı. Onun yerine bu yapı kullanıldı. Normalde sizler veritabanı kullanabilirsiniz. Aynı mantık
//Örnek veritabanı
const user = {
    username: "admin",
    email: "admin@gmail.com",
    password: "1234"
}


//Giriş servisi
//Buraya istek atıldığında işlenecek veriler.
app.post("/login", async (req, res) => {

    //gelen isteğin body'sinden verileri çekip değişkenlere aktarır.
    const { email, password } = req.body;

    if (email !== user.email || password !== user.password) {
        return res.status(401).json({ message: "Bilgiler geçersiz." })
    }
        const payload = { email: user.email, username: user.username };
        const secretKey = process.env.ACCESS_TOKEN_SECRET
        //30 saniye geçerli olacak bir token oluşturuldu. Veritabanından gelen değer token key'lerine atandı.
        const accessToken = jwt.sign(payload,secretKey,{expiresIn:"30s"});
        
   
    //Kullanıcıya access token gönderildi.
    return res.status(200).json({accessToken});
});

//Bu server'ı 5000. portta dinlemesini ister.
app.listen(5000, () => {
    console.log("Server 5000. portta hazır...")
})