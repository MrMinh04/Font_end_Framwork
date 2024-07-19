myApp.controller('oderEdit', function($scope, $http, $routeParams){
    $scope.listOrder = {
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
        $scope.listOrder = res.data
    })
    $scope.onClickSubmit = function(){
        $http({
            method: "PUT",
            url: "http://localhost:3000/oder/" + $routeParams.id,
            data: $scope.listOrder
        }).then(function(){
            alert("Chỉnh sửa thành công!");
            window.location.href = "#!oder/list";
        })
    }
})