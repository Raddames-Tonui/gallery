var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://raddames:raddames123@cluster0.b6r82.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://raddames:raddames123@cluster0.b6r82.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://raddames:raddames123@cluster0.b6r82.mongodb.net/darkroom-test?retryWrites=true&w=majority',
  }
  

module.exports = config;


