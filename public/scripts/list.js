(function() {
'use strict';


angular.module('app')

  .controller('list', ['$scope','$http', 'dataService', '$location', function($scope, $http, dataService, $location) {
	$scope.msg = 'helo';
  	$scope.emplist = [];
  	
  	$scope.getlist = function(){
	         
	          $http({
	                  url : 'http://localhost:5000/getlist',
	                  method : 'POST',
	                  data : {}
	          }).then(function(httpResponse){
	                  
	                  $scope.emplist = httpResponse.data;
	          });
	  }
	  $scope.getlist();


}]); // ends controller

})();
