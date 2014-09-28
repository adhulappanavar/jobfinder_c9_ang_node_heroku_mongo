-----------------------------------------------------------------------
Step 1: Re-organise bower_components.
-----------------------------------------------------------------------
Create a folder called 'public' and move bower_components under public folder

-----------------------------------------------------------------------
Step 2 : Create a folder for Angular called app under public
-----------------------------------------------------------------------

-----------------------------------------------------------------------
Step 3 : Create a file called app.js and add the following 
-----------------------------------------------------------------------
angular.module('app', []);

angular.module('app')
        .controller('testCtrl', 
                    function($scope){
                            $scope.test = "working";
                        }
                    );
                    
-----------------------------------------------------------------------
Step 4: Add the app.js reference to Index.jade
-----------------------------------------------------------------------
script(type='text/javascript', src = 'bower_components/angular/angular.js')
script(type='text/javascript', src = '/app/app.js')

-----------------------------------------------------------------------
Step 5 : Make index.jade angular, the file index.jade looks like
----------------------------------------------------------------------
link(rel= 'stylesheet', href='/bower_components/bootstrap/dist/css/bootstrap.min.css')

script(type='text/javascript', src = 'bower_components/angular/angular.js')
script(type='text/javascript', src = '/app/app.js')

body(ng-app='app')
    div(ng-controller='testCtrl')
        div{{ test }}
        
-----------------------------------------------------------------------
Step 6 : Run the server.js and refresh the browser
-----------------------------------------------------------------------
You should text 'working' on the browser


        



