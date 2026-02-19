const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tanvibhalani05:Tanvi_2026@cluster0.f9biss9.mongodb.net/?appName=Cluster0").then(() => {
    console.log("Mongodb is connected")
}).catch((err) => {
    console.log(err)
})
// const db = mongoose.connection

// db.once("open" , (err) => {
//     err ?console.log(err) : console.log("db is connected")
// })

// module.exports = db