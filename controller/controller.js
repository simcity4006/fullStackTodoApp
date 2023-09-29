const todoModel = require('../model/todoModel');
module.exports.getToDo = async (req, res) => {
  const toDo = await todoModel.find();
  res.send(toDo);
};
module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text }).then(data => {
    console.log('Added Successfully....');
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  try {
    await todoModel.findByIdAndUpdate(_id, { text });
    res.send('Updated Successfully....');
  } catch (err) {
    console.log(err);
    res.status(500).send('Update failed.');
  }
};
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  try {
    await todoModel.findByIdAndDelete(_id);
    res.send('Deleted Successfully....');
  } catch (err) {
    console.log(err);
    res.status(500).send('Deletion failed.');
  }
};
