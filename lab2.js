// Math Calculations in browser

var http = require('http');
var url = require('url');

// Create our own server with node js

http.createServer(function(req, res){

// find variables in url by req
var qs = url.parse(req.url,true).query;


var method = qs.method;	
var x = parseFloat(qs.x);
var y = parseFloat(qs.y);


// if..else statements

	if(method == 'add'){
		res.write( + x + ' + ' + y + ' = ' + (x+y));            
    }

	else if(method == 'subtract'){
        res.write( + x + ' - ' + y + ' = ' + (x-y));
    }

	else if(method == 'multiply'){
		res.write( + x + ' * ' + y + ' = ' + (x*y));
    }

	else if(method == 'divide'){
        res.write( + x + ' / ' + y + ' = ' + (x/y)); 
    }

	else{
        res.write('Error.! Method is incorrect.!!');
    }

res.end();

}).listen(3000);

// http://localhost:3000/lab2.js?method=?&x=?&y=?
	

