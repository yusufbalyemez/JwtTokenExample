const jwt = require("jsonwebtoken")
//req, res biliyosun zaten. next ise sorun yok et devam et demekmiş.
const authMiddleWare = (req,res,next) => {
    // Bearer tokenler, sahip olunan kişiler tarafından kullanılabilir. Aynı tokene sahip kişiler aynı işlemi yapabilirler.


    const token = req.headers['authorization']?.split(" ")[1];

    if(!token) return res.status(401).json({messsage: "Giriş yapın."}); //401 bu işlem yasak gerçekleştiremezsin anlamına gelir.

    //ilk parametre hata, ikinci parametre tokenin payloadu(içinde tuttukları bilgiler)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, payLoad)=>{
        if(err){
            console.log(err);
            return res.status(400).json(err);
        }

        req.tokenPayload = payLoad;
        next(); //Servisin bodysine atlayabilirsin. Bir sorun yok.
    });
}

module.exports = { authMiddleWare };