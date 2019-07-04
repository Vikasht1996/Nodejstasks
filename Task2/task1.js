var fs = require('fs');
fs.readFile("eaxmpl.txt",'utf8',function(err,data)
{
    if(err)
    {
        console.log(err);
    }
})
console.log("Something else");