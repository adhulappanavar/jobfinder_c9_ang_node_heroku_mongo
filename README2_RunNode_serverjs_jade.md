Refer to Pluralsight video 
Continuous Integration and Deployment for AngularJS and Node.js by Authored by: Alexander Zanfir
URL : http://pluralsight.com/training/Courses/TableOfContents/continuous-integration-deployment-angularjs-nodejs
Section : "" 





-----------------------------------
---- Node Startup ----------------
----------------------------------
Step 1 : Create server,js file
Step 2 : Add following lines to the file
    var express = require ('express');
    var app = express();
    app.set ('view engine', 'jade');
    app.get('*', function(req, res){
       res.render('index'); 
    });

Step 3 : Create the Index file index.jade
Step4 : Add the following line 
    div hi
    
    
----------------------------------------------------
step 5 : Update server.js as follows
--------------------------------------------------
var express = require ('express');

var app = express();

app.set('views', __dirname);
app.set ('view engine', 'jade');

app.get('*', function(req, res){
   res.render('index'); 
});

app.listen(process.env.PORT, process.env.IP);
-------------------------------------------------------

-------------------------------------------------------------------
Step 6 : Press run (note server.js should be the active tab)
-------------------------------------------------------------------
Your code is running at https://jobfinder-c9-dhulappanavar.c9.io.
Important: use process.env.PORT as the port and process.env.IP as the host in your scripts!

debugger listening on port 15454

--------------------------------------------------


Step 7 : Click on link https://jobfinder-c9-dhulappanavar.c9.io
You will see "hi" on the web page
