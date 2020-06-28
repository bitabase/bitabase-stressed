const axios = require('axios');

function createDatabase (chance) {
  const record = {
    email: chance.email(),
    password: 'Password@11111'
  };

  console.log('Creating account:', JSON.stringify(record));

  return axios({
    url: 'http://localhost:8001/v1/users',
    method: 'post',
    timeout: 5000,
    data: JSON.stringify(record)
  }).then(response => {
    return {
      record: response.data,
      message: 'successfully created account ' + record.email
    };
  }).catch(error => {
    return {
      record,
      error
    };
  });
}

module.exports = createDatabase;