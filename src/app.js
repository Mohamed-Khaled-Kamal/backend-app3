
const express = require("express")
const app = express()

const port = process.env.PORT || 3000;



const path = require("path")

const x = path.join(__dirname, '../public')

app.use(express.static(x))


/////////////////////////////////////

app.set('view engine', 'hbs');



const viewDectionary = path.join(__dirname, '../temp/views')
app.set("views", viewDectionary)

/////////////////////////
var hbs = require('hbs')

const partialsPath = path.join(__dirname, "../temp/partials")

hbs.registerPartials(partialsPath)


app.get('/', (req, res) => {
    res.render('index',{
        title: "Home",
        desc : "This is Home Page"
    })
})


app.get('/TEAM', (req, res) => {
    res.render('TEAM',{
        title: "TEAM",
        desc: "This is our TEAM ",
        Name: "Mai Mohamed",
        Job: "Designer",
        City: "Mansoura",
        Age: 25,
        Img2: "img/team2.jpg",
        Name2: "Mohamed Khaled",
        Job2: "Developer",
        City2: "Luxor",
        Age2: 26,
        Img1: "img/mohamed1.jpg",
        Name3: "John Addam",
        Job3: "Engineer",
        City3: "New York",
        Age3: 29,
        Img3 : "img/team1.jpg"
    })
})

app.get('/SERVICE', (req, res) => {
    res.render('SERVICE',{
        title: "SERVICE",
        desc: "This is SERVICE Team",
        Name: "Yan Krukau",
        Job: "Customer Service",
        City: "Istanbul",
        Age: 28,
        Img4: "img/customer1.jpg",
        Name2: "Mikhail Nilov",
        Job2: "Customer Service",
        City2: "Hong Kong",
        Age2: 29,
        Img5: "img/customer2.jpg",
        Name3: "Antoni Shkraba",
        Job3: "Customer Service",
        City3: "Las Vegas",
        Age3: 30,
        Img6 : "img/customer3.jpg"
    })
})

app.get('/ABOUT', (req, res) => {
    res.render('ABOUT',{
        title: "About",
        desc : "We are excited to be at the forefront of [industry] and are constantly exploring new opportunities to push the boundaries of technology. Join us on our journey to shape the future."
    })
})

app.get('/CONTACTS', (req, res) => {
    res.render('CONTACTS',{
        title: "CONTACTS",
        desc: "Contact With Us",
        Name: "FACEBOOK",
        Img7: "img/facebook.png",
        Name2: "WHATS UP",
        Img8: "img/whatsup.png",
        Name3: "X",
        Img9: "img/x.png",
        Name4: "GOOGLE",
        Img10 : "img/G.png"
    })
})


app.listen( port , ()=> {
    console.log(`App listening on port ${port}`)
})



