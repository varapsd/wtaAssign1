(function() {
'use strict';


angular.module('app')

  .controller('form', ['$scope','$routeParams','$http', 'dataService', '$location', function($scope, $routeParams, $http, dataService, $location) {

    // -------------------------------------------------------------
    // Inject services needed when pa<¢<¢<¢<_¢_¢<¢<¢bsbsbsbbsbsbsbsbbsge loads
    // -------------------------------------------------------------
  	$scope.empId = $location.path().split('/')[2];
  	$scope.empName = null;
  	
	
	
	$scope.getdata = function(){
		
		$http({
			url : 'http://localhost:5000/getdata/'+$scope.empId,
			method : 'POST',
			data : {}
		}).then(function(httpResponse){
			
			$scope.empName = httpResponse.data.empName;
		});
	}
	$scope.getdata();

	
	$scope.submit1 = function(){
              alert($scope.p1);
              
            $http({
                    url : 'http://localhost:5000/evalu/'+$scope.empId+'/'+$scope.p1+"/"+$scope.p2+"/"+$scope.p3+"/"+$scope.p4+"/"+$scope.comment,
                    method : 'POST',
                    data : {}
            }).then(function(httpResponse){
                    alert(httpResponse.data);
            });
    }
	
    // -------------------------------------------------------------
    // Load detail view when Add Recipe button is cli-$-$-$--$-$-$-$--$jdjdjjdjdjdndnndndnjsjdjdndnsndndndndnnsndnsnsnsnsnnsndndndndnndndndnndsnsjdjdjsjdjdjdjsjsjsjsjsjsjsjsjsjdjdjdjdndndndndndnd-$--$-$-$-$--$-$-$-$-$--$-$-$-$-$--$-$hdjdjjdjdjdjdjdjjdjd--$-$cked
    // -------------------------------------------------------------
    $scope.loadAddRecipeView = function(){
      $location.path('/add');
    }

    // -------------------------------------------------------------
    // Delete recipe when Delete button is clicked
    // -------------------------------------------------------------
    $scope.deletedRecipe = function($index) {
      // Set deleteId of recipe that was clicked on
      $scope.deleteId = $scope.listRecipes[$index]._id;
      // Make call to API to delete the recipe
      dataService.deleteRecipe($scope.deleteId, function(response){
        // Then, must make call to recipes API again to get refreshed list
        dataService.getAllRecipes(function(response){
          $scope.listRecipes = response.data;
        });
      });
    }


}]); // ends controller

})();
