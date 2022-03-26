let express = require('express')
let path = require('path')
let router = express.Router()
let puppeteer = require('puppeteer')


let downloadPath = path.resolve('./public')

//  DEFAULT
//  ----
//  this is temporary, once post is functional
//  turn this into standard return

router.get('/', async(req, res) => {
    
    const browser = await puppeteer.launch({
        headless: true,
        defaultviewport: null,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
        //executablePath: '/usr/bin/chromium-browser'
    })
    const page = await browser.newPage()
    page.setViewport({
        width: 600,
        height: 1200,
    })
    await page.goto("http://159.223.169.67:8080/pdf/fuck", {
        waitUntil: 'networkidle2',
    })
    await page.pdf({ path: `${downloadPath}/testing.pdf`, format: "a4" })
    await browser.close()
    
    res.status(200).send({'title': 'GET-TEST'})
})
//  ----------------------------


//  TEST
//  ----

router.post('/', async(req, res) => {
    res.status(200).send({'title': 'POST-TEST'})
})

//  ----------------------------

//  GENERATE DYNAMIC FLYER
//  ----

router.get("/:userQuery", async(req, res) => {
    res.render('stay-connected/index', {
        data: { userQuery: req.params.userQuery }
    })
    //res.render('stay-connected/index')
})

module.exports = router