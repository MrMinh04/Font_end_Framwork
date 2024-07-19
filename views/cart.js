myApp.controller('Cart', function($scope, $http){
    $scope.cart = {
        id: "",
        products: [
            {
                product_id: "",
                product_name: "",
                product_price: "",
                quantity: "",
                anh: "",
                size: "",
                color: ""
            }
        ]
    }
    var userId = window.sessionStorage.getItem('userId');
    // $scope.userId = userId;
    console.log(userId);
    $http({
        method: "GET",
        url: "http://localhost:3000/cart/" + userId
    }).then(function(res){
        $scope.cart = res.data
    })

    $scope.Del = function() {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/cart/" + userId
        }).then(function(res) {
            // Xử lý logic sau khi call api thành công
            // Hiển thị thông báo
            alert("Đã xóa thành công.");

            // Điều hướng về trang danh sách
            window.location.href = "#!";

        })

    } 
    

    
})