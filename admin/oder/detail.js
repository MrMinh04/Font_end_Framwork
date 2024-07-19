myApp.controller('oderDetail', function($scope, $http, $routeParams){
    $scope.oderDetail = {
        id:"",
        tenKhach: "",
        pttt: "",
        trangThai: "",
        products: "",
        diaChi: ""
    };
    $http({
        method: "GET",
        url: "http://localhost:3000/oder/" + $routeParams.id
    }).then(function(res){
        $scope.oderDetail = res.data
    })
})