var MovieController = function MovieController($scope) {
    $scope.person = {
        name : 'Abdulla Chowdhury',
        location: 'Long Island City, queense'
    };
};
angular
    .module('app')
    .controller('MovieController',['$scope', MovieController]);
