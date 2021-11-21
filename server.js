const express = require("express")

const app = new express();

//Create an array that lists each prototype design
//Provide detail of each prototype for each item in the array
const prototypes = [
    {
        title:"SubLearn",
        platform:"Figma",
        pages:7,
        purpose:"university",
        year:'2021'
    },

    {
        title:"Lockdown Explorer",
        platform:"Adobe XD",
        pages:8,
        purpose:"university",
        year:'2021'
    },

    {
        title:"Melbourne Walls",
        platform:"Figma",
        pages:4,
        purpose:"university",
        year:'2020'
    },

    {
        title:"Gain It",
        platform:"Figma",
        pages:3,
        purpose:"university",
        year:'2020'
    },
]
 
//Create a function to store the meta tags and bootstrap links
function buildHeader(){
    var header = "<html lang=\"en\">\
    <head>\
        <!--Meta information and title-->\
        <meta charset=\"utf-8\">\
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\
        <title>SIT725 Prac 2</title>\
        <meta name=\"author\" content=\"James Nemecek\">\
        <meta name=\"description\" content=\"Second web page for SIT725\">\
        </head>";
    return header;
}

function buildBody(){
    var body = "<body>\
    <div class=\"container\">\
    <h1>Prototype</h1>\
    <p>Return prototypes</p>\
    </div>\
    </body>\
    </html>";
    return body
}

//Use get method that returns the array or items within the array from the url
app.get("/prototypes", (req, res) => {
    //Call function to write html header and body
    res.write(buildHeader());
    res.write(buildBody());

    if (req.query.title != null) {
        res.json(
            prototypes.filter(x => x.title == req.query.title)
        )
    }
    else if (req.query.platform != null) {
        res.json(
            prototypes.filter(x => x.platform == req.query.platform)
        )
    }
    else if (req.query.pages != null) {
        res.json(
            prototypes.filter(x => x.pages == req.query.pages)
        )
    }
    else if (req.query.purpose != null) {
        res.json(
            prototypes.filter(x => x.purpose == req.query.purpose)
        )
    } 
    else if (req.query.year != null) {
        res.json(
            prototypes.filter(x => x.year == req.query.year)
        )
    }else {
        res.json(prototypes);
    }
});

/*function addnumber(n1, n2){
    console.log("The result is " + (n1 + n2));
    return n1 + n2;
}*/

/*app.get("/addtwonumbers", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addnumber(n1, n2);
    res.json({
        statusCode: 200,
        data: result
    });
});*/

const port = 3030

app.listen(port, ()=> {
    console.log("Now listening to: " + port);
})
