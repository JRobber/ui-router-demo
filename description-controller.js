angular.module('uiRouteDemo')

.controller('descriptionController', function($scope, $stateParams, planetService){
    var planetIndex = $stateParams.idx/1;
    
    $scope.name = planetService.planets[planetIndex].name; 
    $scope.description = planetService.planets[planetIndex].desc;
});
