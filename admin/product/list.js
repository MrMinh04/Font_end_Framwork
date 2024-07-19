myApp.controller('productList', function($scope, $http){
    console.log('Log để kiểm tra: Khai báo categoryList thành công');
    $scope.listProduct = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/product"
    }).then(function(res){
        $scope.listProduct = res.data;
    })
    $scope.onClickButtonXacNhanXoa = function($id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/product/" + $id
        }).then(function(res) {
            // Xử lý logic sau khi call api thành công
            // Hiển thị thông báo
            alert("Đã xóa thành công.");

            // Điều hướng về trang danh sách
            window.location.href = "#!product/list";

        })

    } 
    var userId = window.sessionStorage.getItem('userId');
    $scope.userId = userId;
    console.log(userId);
})





