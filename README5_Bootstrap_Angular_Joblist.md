------------------------------------------------------------
Adding a list to display open job positions using Bootstrap and Angular
Ref : http://getbootstrap.com/components/#list-group-custom-content
-----------------------------------------------------------------

-----------------------------------------------------------------
Step 1 : Create a list in Bootstrap using Jade
-----------------------------------------------------------------
The following
<div class="list-group">
  <a href="#" class="list-group-item active">
    <h4 class="list-group-item-heading">List group item heading</h4>
    <p class="list-group-item-text">...</p>
  </a>
</div>

will be written in Jade Equivalent

link(rel= 'stylesheet', href='/bower_components/bootstrap/dist/css/bootstrap.min.css')

script(type='text/javascript', src = 'bower_components/angular/angular.js')
script(type='text/javascript', src = '/app/app.js')

body(ng-app='app')
    .container
    h1 Find a Job Today by Anil
    div(ng-controller='testCtrl')
        .list-group
            a.list-group-item(href='#')(active)(ng-repeat="job in jobs")
                h4.list-group-item-heading {{ job.title }}
                p.list-group-item-text {{ job.description }}
  
  

-----------------------------------------------------------------
Step 2 : Update app.js $Scope to hold the jobs data in JSON
-----------------------------------------------------------------
angular.module('app', []);

angular.module('app')
    .controller('testCtrl',
        function($scope) {
            $scope.jobs = [{
                title: 'AKD Sales Person',
                description: 'you will fight dragon'
            }, {
                title: 'AKD Account',
                description: 'you will use the keyboard'
            }];
        }
    );
    
-----------------------------------------------------------------
Step 3 : Run the Server.js and check it in the browser
-----------------------------------------------------------------
You should see the list of jobs
The HTML source -output of Jade and Angular looks as follows :

<html>
<head>
	<style type="text/css">
	</style><link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css"><script type="text/javascript" src="bower_components/angular/angular.js"></script>
	<script type="text/javascript" src="/app/app.js"></script>
</head>
<body ng-app="app" class="ng-scope">
	<div class="container"></div><h1>Find a Job Today by Anil</h1>
	<div ng-controller="testCtrl" class="ng-scope">
		<div class="list-group">
			<!-- ngRepeat: job in jobs -->
			<a href="#" active="active" ng-repeat="job in jobs" class="list-group-item ng-scope">
				<h4 class="list-group-item-heading ng-binding">AKD Sales Person</h4>
				<p class="list-group-item-text ng-binding">you will fight dragon</p>
			</a>
			<!-- end ngRepeat: job in jobs -->

			<a href="#" active="active" ng-repeat="job in jobs" class="list-group-item ng-scope">
				<h4 class="list-group-item-heading ng-binding">AKD Account</h4>
				<p class="list-group-item-text ng-binding">you will use the keyboard</p>
			</a>
			<!-- end ngRepeat: job in jobs -->
		</div>
	</div>
</body>
</html>





