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