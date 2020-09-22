const express = require("express");

const Routes = express.Router();


Routes.post("/util/text/lowercase", (req,res) => {
    const { input } = req.body;

    let output = input.toLowerCase();

    res.json({
        "action": "lowercase",
        "input": input,
        output
    })
})

Routes.post("/util/text/uppercase", (req,res) => {
    const { input } = req.body;

    let output = input.toUpperCase();

    res.json({
        "action": "uppercase",
        "input": input,
        output
    })
})

Routes.get("/util/number/minimum", (req, res) => {
    const { input } = req.query;    

    let lista = input.split(',')
    let output = Math.min(...lista)

  let area = String(input)
        .split(',')


    res.json({
        "action": "minimum",
        "input": area,
        output
    })

})

Routes.get("/util/number/maximum", (req, res) =>{
    const { input } = req.query;    

    let lista = input.split(',')
    let output = Math.max(...lista)

  let area = String(input)
        .split(',')


    res.json({
        "action": "maximum",
        "input": area,
        output
    })

})


module.exports = Routes;