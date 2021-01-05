const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/config.env` });
const app = require(`./app`);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${port}...`);
});
