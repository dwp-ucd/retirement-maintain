const express = require('express');
const router = express.Router()

router.post('/pc-srb-2/review', (req, res) => {
  res.redirect('/pc-srb-2/review-details')
})
;
router.post('/pc-srb-2/change-pp', (req, res) => {
  res.redirect('/pc-srb-2/review-award')
})
;

router.post('/pc-srb-2/review-details', (req, res) => {
  res.redirect('/pc-srb-2/review-award')
})
;

router.post('/pc-srb-2/change-date', (req, res) => {
  res.redirect('/pc-srb-2/review-award')
})
;

router.post('/pc-srb-2/change-date2', (req, res) => {
  res.redirect('/pc-srb-2/review-award2')
})
;

router.post('/pc-srb-2/change-pp2', (req, res) => {
  res.redirect('/pc-srb-2/review-award2')
})
;

router.post('/pc-srb-2/review-award2', (req, res) => {
  res.redirect('/pc-srb-2/received-pension-credit')
})
;

router.post('/pc-srb-2/change-nsp-2', (req, res) => {
  res.redirect('/pc-srb-2/review-award2')
})
;


router.post('/pc-srb-2/review-award', (req, res) => {
  res.redirect('/pc-srb-2/received-pension-credit')
})
;

  router.post('/pc-srb-2/received-pension-credit', (req, res) => {
    if ( req.body['receiving-pc'] === 'citizen' ) {
      res.redirect('/pc-srb-2/pc-review-task-multiple');
    }
  else if ( req.body['receiving-pc'] === 'partner' ) {
    res.redirect('/pc-srb-2/enter-partner-details');
  }  else {
    res.redirect('/pc-srb-2/confirm')
  }
})


module.exports = router;