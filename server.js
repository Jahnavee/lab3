/**
 * Created by Sony on 9/23/2016.
 */
//link to connect package
 var connect = require('connect');

//link to url module
var url = require('url');

//connect object
var app = new connect();

var lab3 = function (req, res, next) {
//    get the subtotal value from the url
    var qs = url.parse(req.url, true).query;
    var method = qs.method;
    var x = qs.x;
    var y = qs.y;

    if(method == 'add')
    {
        var add = parseInt (x) + parseInt(y);
        res.end( x + '+'  + y + '=' + add);
    }

    else if (method == 'subtract')
    {
        var subtract = parseInt(x) - parseInt(y);
        res.end( x + '-'+  y + '='+subtract);
    }


    else if (method == 'multiply')
    {
        var multiply = parseInt(x) * parseInt(y);
        res.end(x + '*' + y + '=' + multiply);
    }

    else if (method == 'divide')
    {
        var divide = parseInt(x) / parseInt(y);
        res.end( x + '/'  + y + '=' + divide);
    }

    else {
        res.end(  "The method value is wrong. Retry");
    }
};

// var calculate = function (req, res, next){
//     var qs = url.parse(req.url, true).query;
//     var total= qs.total;
// }

app.use('/lab3',lab3);
app.listen(3000);

//display message that the server is running
console.log('connect running on port 3000');