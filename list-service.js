angular.module('uiRouteDemo')

.service('planetService', function(){
    this.planets = [
        {name: 'Mercury', desc: 'Hot'},
         {name: 'Venus', desc: 'Acid'},
         {name: 'Earth', desc: 'eww people'},
         {name: 'Mars', desc: 'Red'},
         {name: 'Jupiter', desc: 'Eyeball'},
         {name: 'Saturn', desc: 'Rings'},
         {name: 'Uranus', desc: 'he he'},
         {name: 'Neptune', desc: 'Cold'},
         {name: 'Pluto ????', desc: 'Controversial'}
        ];
});
