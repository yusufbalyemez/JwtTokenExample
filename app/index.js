//Bu şekilde de dahil edilirdi. IES Modüllerini kullanmak için package.json' kısmına gidip ' "type": module 'kodunu main altına eklemek gerekirdi.
// import express from 'express'
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'

const express = require("express")
const jwt =  require('jsonwebtoken')
const  dotenv =  require('dotenv')

//Bu metot'un yaptığı şey, Ortam değişkenleri dosyasının içerisindeki bütün anahtar değerleri buraya explose ediyor.
//tüm ortam değişkenleri .env dosyası içerisinde olacak.
dotenv.config()

//Bir server uygulaması oluşturur.
const app = express()

//Bu server'ı 5000. portta dinlemesini ister.
app.listen(5000,()=>{
    console.log("Server 5000. portta hazır.")
})