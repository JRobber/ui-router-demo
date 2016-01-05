angular.module('uiRouteDemo')

.service('sweetsService', function(){
    this.sweets = [
         {name: 'Snickers', desc: 'Satisfies'},
         {name: 'Twixs', desc: 'Two for me'},
         {name: 'Ice cream', desc: 'nom nom nom'},
        ];
});
