angular.module('uiRouteDemo')

.controller('detailsController', function($scope, $stateParams, sweetsService){
    var idx = $stateParams.sweetIdx;
    
    $scope.sweetName = sweetsService.sweets[idx].name
    $scope.sweetDesc = sweetsService.sweets[idx].desc
    
});
