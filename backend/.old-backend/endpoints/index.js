let express = require('express')
let router = express.Router()


//  DEFINE ROOT
//  ----


router.get('', async (req, res) => {
    res.status(200).send('root page')
})
module.exports = router