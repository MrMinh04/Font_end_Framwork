myApp.controller('oderList', function($scope, $http){
    $scope.listOder = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/oder"
    }).then(function(res){
        $scope.listOder = res.data
    })
})