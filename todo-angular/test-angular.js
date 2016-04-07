(function() {
  var modle = angular.module('myApp',[]);
  modle.controller('myList',fn);
  function fn($scope) {
  	$scope.list = [];
  	$scope.add = function() {
  	  //$scope.txt来自model（用户时时输入的数据）
  		$scope.list.push($scope.txt);
  		$scope.txt = '';
  	};

  	$scope.deleteLi = function(index) {
        $scope.list.splice(index, 1);
  	}
  }
})();
