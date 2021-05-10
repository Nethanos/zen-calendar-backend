const express = require('express');
const {dates, resetDate } = require('./date-mock');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())

app.use(bodyParser())


const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log("App running"))

app.get("/", (req, res) => {
    res.send("API Avaliable")
})


app.get("/dates", (req, res) => {
    res.json(dates)
})

app.post("/schedule", (req,res) => {

    const markedSchedule = req.body;

   const dateFound= dates.filter((date) => date.id === markedSchedule.dateIdentifier);

   if(dateFound.length === 1){
    dateFound[0].hours.forEach((hours) => {
        if(hours.hour === markedSchedule.hour) {
            hours.avaliable = false;
        }
   })
   }
    return res.status(200).json(dates);
})
