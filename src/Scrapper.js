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
            console.log(html);

            // $('.course-name', html).each(function () { //<-- cannot be a function expression
            //     const title = $(this).text()
            //     const url = $(this).find('p').text()
            //     console.log(title);
            //     articles.push({
            //         title
            //     })
            // })
            // res.json(articles)
        }).catch(err => console.log(err))

})

app.get('/jobseeker/:key', (req, res) => {
    // console.log(req.params.key);
    // res.end(req.params.key);
    // const url = 'https://www.linkedin.com/jobs/search/?keywords=' + req.params.key + '&location=Indonesia';
    const url = 'https://www.linkedin.com/jobs/search/?keywords='+req.params.key+'&location=Indonesia&position=1&pageNum=0';

    const articles = [];

    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            // const articles = []
            
            $('div.base-search-card', html).each(function () { //<-- cannot be a function expression
                // const title = $(this).text()
                const job = $(this).find('div.base-search-card__info h3.base-search-card__title').text().trim()
                const company = $(this).find('h4.base-search-card__subtitle a.hidden-nested-link').text().trim();
                const location = $(this).find('div.base-search-card__metadata span.job-search-card__location').text().trim();
                const logo = $(this).find('.artdeco-entity-image').attr('data-delayed-url');
                const detail = $(this).find('a.base-card__full-link').attr('href');
                console.log(detail);
                articles.push({
                    job, company, location, logo, detail
                })
            })
            res.json(articles)
        }).catch(err => console.log('ada error', err))

})


app.get('/lokerid/:key', (req, res) => {
    const url = 'https://www.loker.id/cari-lowongan-kerja?q='+req.params.key+'&lokasi=0';

    const articles = [];

    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            // const articles = []
            
            $('.job-box', html).each(function () { //<-- cannot be a function expression
                // const title = $(this).text()
                const job = $(this).find('h3.media-heading a').text().trim();
                const company = $(this).find('table tbody tr:nth-child(1) td:nth-child(2)').text().trim();
                // const location = $(this).find('div.base-search-card__metadata span.job-search-card__location').text().trim();
                const logo = $(this).find('img.avatar').attr('data-lazy-srcset').slice(0, -2).trim();
                const detail = $(this).find('h3.media-heading a').attr('href');
                console.log(logo);
                articles.push({
                   job,company, logo, detail
                })
            })
            res.json(articles)
        }).catch(err => console.log('ada error', err))

})

app.get('/kalibrr/:key', (req, res) => {
    const url = 'https://www.kalibrr.com/id-ID/job-board/te/'+req.params.key+'/1';

    const articles = [];

    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            // const articles = []
            
            $('.k-divide-y .k-border-tertiary-ghost-color', html).each(function () { //<-- cannot be a function expression
                // const title = $(this).text()
                const job = $(this).find('a.k-text-primary-color:nth-child(1)');
                const company = $(this).find('a.k-bg-white div.k-col-start-3 a.k-text-subdued').text().trim();
                const ss = $(this).find('span.k-text-subdued').text().trim();
                const logo = $(this).find('a.k-text-subdued img').attr('src');
                // const detail = $(this).find('a.k-text').attr('href');
                console.log(company);
                // articles.push({
                //    job, company, ss, logo
                // })
            })
            res.json(articles)
        }).catch(err => console.log('ada error', err))

})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))