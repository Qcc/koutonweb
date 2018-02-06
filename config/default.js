module.exports = {
  port: 8080,
  session:{
    secret: 'koutondb',
    resave: false,
    key: 'koutonweb',
    cookie: { 
      secure: true,
      maxAge:360000
    }
  },
  mongodb: 'mongodb://localhost:27017/koutondb'
}