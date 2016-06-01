var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var srv = express();

srv.get('/',function(req,res)
{
	res.send("Welcome luke you are in the dark side");
});

srv.get('/r2d2',function(req,res)
{
        res.send(money());
});

srv.listen(3000,function()
{
	console.log("Ecoute in port 3000");
});
function money()
{
	var nb = 10;
	var moneys = [];
	for(var i = 0 ; i < nb ; i++)
	{
		var value = chance.dollar({max:1000});
		moneys.push(value);
	};
	console.log(moneys);
	return moneys;
}
