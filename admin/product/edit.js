myApp.controller('productEdit', function($scope, $http, $routeParams){
    console.log('productEdit');
    $scope.product = {
        id:"",
        ten: "",
        anh: "",
        anh2: "",
        anh3: "",
        anh4: "",
        gia: "",
        tenDanhMuc: "",
        trangThai: "",
        moTa: ""
    }
    $http({
        method: "GET",
        url: "http://localhost:3000/product/" + $routeParams.id,
    }).then(function (res) {
        $scope.product = res.data;
    })

    $scope.onClickSubmit = function() {
        $http({
            method: "PUT",
            url: "http://localhost:3000/product/" + $routeParams.id,
            data: $scope.product
        }).then(function(){
            alert('Chỉnh sửa thành công!');
            window.location.href = "#!product/list";
        })
    }
})