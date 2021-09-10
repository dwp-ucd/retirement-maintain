const express = require('express');
const router = express.Router()


router.post('/newclaim7/address', (req, res) => {
  res.redirect('/newclaim7/bank')
})
;

router.post('/newclaim7/bank', (req, res) => {
  res.redirect('/newclaim7/sp-date')
})
;

router.post('/newclaim7/sp-date', (req, res) => {
  res.redirect('/newclaim7/contact')
})
;

router.post('/newclaim7/contact', (req, res) => {
  res.redirect('/newclaim7/alternative')
})
;

router.post('/newclaim7/alternative', function(req, res) {
  if ( req.body['alternative'] === 'yes' ) {
    res.redirect('/newclaim7/alternative2');
  } else {
    res.redirect('/newclaim7/marital-status');
  }
});

router.post('/newclaim7/alternative2', (req, res) => {
  res.redirect('/newclaim7/marital-status')
})
;

router.post('/newclaim7/marital-details', (req, res) => {
  res.redirect('/newclaim7/lived-worked')
})
;

router.post('/newclaim7/lived-worked', function(req, res) {
  if ( req.body['lived-outside'] === 'yes' ) {
    res.redirect('/newclaim7/lived');
  } else {
    res.redirect('/newclaim7/check-answers');
  }
});

router.post('/newclaim7/marital-status', function(req, res) {
  if ( req.body['marital-status'] === 'married' ) {
    res.redirect('marital-details');
  } else if ( req.body['marital-status'] === 'never' ) {
    res.redirect('lived-worked');
  } else if ( req.body['marital-status'] === 'civil-partnership' ) {
    res.redirect('civil-details');
  } else if ( req.body['marital-status'] === "widowed" ) {
    res.redirect('widow-details');
  } else if ( req.body['marital-status'] === "divorced" ) {
    res.redirect('divorce-details');
  } else if ( req.body['marital-status'] === "dissolved" ) {
    res.redirect('dissolved-details');
  }
});


router.post('/newclaim7/dob', function(req, res) {
  if (req.session.data["nino"] === "xx347612a") {
    res.redirect('dob-request');
  } else if (req.session.data["nino"] === "XX347612A") {
    res.redirect('dob-request');
  } else {
    res.redirect('address');
  }
});



  module.exports = router;
