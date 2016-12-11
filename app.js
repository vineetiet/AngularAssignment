(function(){

     angular.module('LunchCheck', [])
     .controller('LunchCheckController', LunchCheckController);

     LunchCheckController.$inject = ['$scope'];
     function LunchCheckController($scope){

          $scope.item="";
          $scope.message="";
          $scope.processItem = function(){

               var item = $scope.item;
               var items = item.split(',');
               if(items.length == 1 && items[0] == ""){
                  $scope.message = "Please enter data first";  
               } else
               if(items.length <=3){
                   $scope.message = "Enjoy";
               }else if(items.length > 3){
                   $scope.message = "Too much!"; 
               }

          };

     };


})();