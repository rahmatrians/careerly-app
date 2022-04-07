const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

// const url_string = 'http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5';

app.get('/', function (req, res) {
    res.json('This is my webscraper')
})

app.get('/results/:key', (req, res) => {
    // console.log(req.params.key);
    // res.end(req.params.key);
    const url = 'https://buildwithangga.com/search?keyword=' + req.params.key;

    const articles = [];

    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            // const articles = []

            $('.course-name', html).each(function () { //<-- cannot be a function expression
                const title = $(this).text()
                const url = $(this).find('p').text()
                console.log(title);
                articles.push({
                    title
                })
            })
            res.json(articles)
        }).catch(err => console.log(err))

})


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))