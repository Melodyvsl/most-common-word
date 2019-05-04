const express = require('express');
const router = express.Router();
const fs = require('fs');
const solution = require('../lib/solution');

router.route('/').post((req, res) => {
  if (!req.files) {
    return res.status(200).render('index', {
      error: 'No File Uploaded.....',
    });
  }

  let { textFile } = req.files;
  if (textFile.name.match(/\.(txt)$/i)) {
    textFile.mv(`./views/${textFile.name}`, function(err) {
      if (err) return res.status(500).send(err);
      let data = solution(`./views/${textFile.name}`);
      res.render('index', {
        word: data.word,
        total: data.count,
        result: `foo${data.word}bar`,
      });
      fs.unlink(`./views/${textFile.name}`, err => {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted from view folder!');
      });
    });
  } else {
    return res.status(200).render('index', {
      error: 'Invalid File Type !!!!!',
    });
  }
});

module.exports = router;
