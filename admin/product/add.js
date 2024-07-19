myApp.controller('productAdd', function($scope, $http){
    console.log('productAdd');
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
    $scope.onClickSubmit = function() {
        $http({
            method: "POST",
            url: "http://localhost:3000/product",
            data: $scope.product
        }).then(function(){
            alert('Thêm mới thành công!');
            window.location.href = "#!product/list";
        })
    }
})