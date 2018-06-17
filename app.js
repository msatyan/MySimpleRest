// Content-Type := type "/" subtype *[";" parameter] 
// Common usages
// application/javascript
// application/json
// application/x-www-form-urlencoded
// application/pdf
// application/xml
// application/zip
// audio/mpeg
// audio/vorbis
// multipart/form-data
// text/css
// text/html
// text/plain
// image/png
// image/jpeg
// image/gif        
// res.writeHeader(200, {"Content-Type": "text/html"});
// res.writeHeader(200, {"Content-Type": "text/plain"});
        
const express = require('express');
const app = express();

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var rt_index = require('./routes/index');
var rt_order = require('./routes/order');

var rt_product = require('./routes/product');
var rt_customer = require('./routes/customer');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', rt_index);
app.use('/order', rt_order);

app.use('/product', rt_product);
app.use('/customer', rt_customer);


// catch 404 and forward to error handler
app.use( (req, res, next) => 
  {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

// error handler
app.use( (err, req, res, next) => 
  {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      res.status(err.status || 500);
      res.send('You Got Error (:-');
  });


// If port has set on env then we will use that else use 3000
var port = process.env.PORT || 3000;

console.log(`http://localhost:${port}/`);
console.log(`http://localhost:${port}/product`);
console.log(`http://localhost:${port}/order`);
console.log(`http://localhost:${port}/order/bluebox/add`);

//module.exports = app;
app.listen(port);

