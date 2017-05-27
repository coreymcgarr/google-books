angular.module('myApp')
.controller('mainCtrl', function($scope, mainService){

  $scope.getBook = function(search){
     var promise = mainService.getBook(search);

     promise.then(function(results){
         $scope.book = results.data.items;
         console.log(results);
       });
   }
});
