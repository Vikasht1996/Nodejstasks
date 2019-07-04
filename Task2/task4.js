var fs = require('fs');
fs.readFile('sample.txt','utf8',function(myData)
{
        console.log("Function is called");
})
console.log("Something else");
function myData()
{
    console.log("Callback");
}