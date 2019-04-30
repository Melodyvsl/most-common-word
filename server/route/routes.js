const express = require('express');
const router = express.Router();
const solution = require('../lib/solution');

router.route('/api').get((req, res) => {
  // const { commonWord } = req.params;
  return res.json(solution('text.txt'));
});

module.exports = router;
