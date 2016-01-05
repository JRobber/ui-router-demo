angular.module('uiRouteDemo')

.controller('listController', function($scope, sweetsService, $state){
    $scope.isLoading = true;
    $scope.sweets = sweetsService.getSweets().then(function(candy){
        
       $scope.isLoading = false;
    });
    
    $scope.sweetClicked = function(idx){
        $state.go('details', {sweetIdx: idx})
    }
});
