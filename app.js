angular.module('uiRouteDemo', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
    
    $urlRouterProvider.otherwise('/list');
    
    $stateProvider
        .state('home', {
                url: '/',
                template: '<div>Something goes here. More goes here. We are made of {{stuffing}}</div>',
                controller: 'ctrl'
        })
        .state('settings', {
            url: '/settings',
            controller: 'settingsController',
            templateUrl: 'settings-tmpl.html'
        })
        .state('list', {
            url: '/list',
            controller: 'listController',
            templateUrl: 'list-tmpl.html'
        })
        .state('description', {
            url: '/description/:idx',
            controller: 'descriptionController',
            template: '<div>{{name}} - {{description}}</div>'
        })
    
});