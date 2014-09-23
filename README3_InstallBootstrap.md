Refer to Pluralsight video 
Continuous Integration and Deployment for AngularJS and Node.js by Authored by: Alexander Zanfir
URL : http://pluralsight.com/training/Courses/TableOfContents/continuous-integration-deployment-angularjs-nodejs
Section : "FrontEnd Setp" 

----------------------------------------------
Step 1 : Install Bootstrap using bower
--------------------------------------------
dhulappanavar@jobfinder:~/workspace $ bower install --save bootstrap
bower bootstrap#*           not-cached git://github.com/twbs/bootstrap.git#*
bower bootstrap#*              resolve git://github.com/twbs/bootstrap.git#*
bower bootstrap#*             download https://github.com/twbs/bootstrap/archive/v3.2.0.tar.gz
bower bootstrap#*              extract archive.tar.gz
bower bootstrap#*             resolved git://github.com/twbs/bootstrap.git#3.2.0
bower bootstrap#~3.2.0         install bootstrap#3.2.0

bootstrap#3.2.0 bower_components/bootstrap
└── jquery#2.1.1
dhulappanavar@jobfinder:~/workspace $


Step 2: Update server.js with following to give reference path of bootstrap
app.use(express.static(__dirname + '/bower_components'));

----------------------------------------------------------------------------
Step 3 : Update index.jade to reference bootstrap.css 
which is directory jobfinder/bower_components/bootstrap/dist/css/bootstrap.css
--------------------------------------------------------------------------------
link(rel= 'stylesheet', href='/bootstrap/dist/css/bootstrap.min.css')
div hi

--------------------------------------------------------------------------------------------------
Step 4 : Run the server.js and check the browser with F12 to see that it uses bootstrap.min.css
-----------------------------------------------------------------------------------------------------
