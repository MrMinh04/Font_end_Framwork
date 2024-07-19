console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');
myApp.controller('categoryList', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo categoryList thành công');
    $scope.listCategory = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/category"
    }).then(function (res) {
        $scope.listCategory = res.data;
    })
    $scope.onClickButtonXacNhanXoa = function($id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/category/" + $id
        }).then(function(res) {
            // Xử lý logic sau khi call api thành công
            // Hiển thị thông báo
            alert("Đã xóa thành công.");

            // Điều hướng về trang danh sách
            window.location.href = "#!category/list";

        })

    } 
}) 