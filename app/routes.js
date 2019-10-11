const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/juggling-balls-answer', function (req, res) {

// Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']


// Check whether the variable matches a condition
  if (jugglingBalls == "5 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }


})
