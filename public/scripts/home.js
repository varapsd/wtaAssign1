(function() {
'use strict';


angular.module('app')
  .controller('home', ['$scope','$http', 'dataService', '$location', function($scope, $http, dataService, $location) {
	$scope.submit = function(){
		alert($scope.empid);
		if($scope.empid == "" || $scope.name == "" || $scope.jdate == ""){
			return;
		}
              $http({
                      url : 'http://localhost:5000/addemp/'+$scope.empid+"/"+$scope.name+"/"+$scope.jdate,
                      method : 'POST',
                      data : {}
              }).then(function(httpResponse){
                      alert(httpResponse.data);
              });
      }

}]); // ends controller

})();
