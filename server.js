require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/todoRoute');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3009;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`database is connected`))
  .catch(error => console.log(error));
app.use(router);
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
