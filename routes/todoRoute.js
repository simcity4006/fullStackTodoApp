const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require('../controller/controller');

const router = require('express').Router();
router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);
module.exports = router;
