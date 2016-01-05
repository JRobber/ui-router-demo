angular.module('uiRouteDemo', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
	    
	$stateProvider
		.state('home', {
			template: '<h3>You are home!!!</h3>',
			url: '/home',
		})
		.state('details', {
			templateUrl: 'details-tmpl.html',
			url: '/details/:sweetIdx',
			controller: 'detailsController'
		})
		.state('sweet', {
			templateUrl: 'list-tmpl.html',
			url: '/sweet',
			controller: 'listController'
		})
		.state('admin', {
			templateUrl: 'admin-tmpl.html',
			url: '/admin',
			controller: 'adminController',
			resolve: function($route){
				if(!admin){
					$route.cancel()
				}
			}
		})
		// .state('profile', { 
			
		// })
		// .state('friendsList', {
			
		// })
		// .state('shoppingCart', {
			
		// })
		// .state('products', {
			
		// })

    
});