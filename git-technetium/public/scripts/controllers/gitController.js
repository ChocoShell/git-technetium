'use strict';

gitApp.controller('gitController', function($scope, $location) {
    $scope.siteTitle = 'Git-Technetium';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
