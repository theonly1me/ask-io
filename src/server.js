const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: `${__dirname}/config/config.env` });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to DB successfully...'));

const app = require(`./app`);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
