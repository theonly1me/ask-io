const domain =
  process.env.NODE_ENV === 'production'
    ? 'https://askio.herokuapp.com'
    : 'http://localhost:3000';
module.exports = survey => {
  return `
  <html>
  <body>
  <div style="text-align:center">
  <h3>We'd love to get your feedback!</h3>
  <p>Please let us know the following:</p>
  <p>${survey.body}</p>
    <div>
    <a href="${domain}/api/v1/surveys/thanks">Yes</a>
    <a href="${domain}/api/v1/surveys/thanks">No</a>
    </div>
  </div>
  </body>
  </html>
  `;
};
