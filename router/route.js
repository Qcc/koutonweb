// var columnsController = require('../controller/columns');
module.exports = function(app){
  
  // app.use('*',require('./find.js'));
  app.use('/',require('./index.js'));  
  app.use('/index',require('./index.js'));
  app.use('/images',require('./images.js'));
  app.use('/image',require('./image.js'));  
  app.use('/new',require('./new.js'));
  
  // 404 page
  app.use('/error',require('./error.js'));
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.render('./error404');
    }
  });
}