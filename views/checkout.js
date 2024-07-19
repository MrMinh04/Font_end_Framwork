myApp.controller('Checkout', function($http, $scope){
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
    $scope.pro = $scope.cart.products[0].product_name;
    console.log($scope.cart )

    $scope.checkOut = {
        id:"",
        tenKhach: "",
        pttt: "",
        trangThai: "",
        products: "",
        diaChi: ""
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

    $scope.onClickSubmit = function(){
        $http({
            method: "POST",
            url: "http://localhost:3000/oder",
            data: $scope.checkOut 
        }).then(function(){
            alert('Thanh toán thành công!');
            window.location.href = "#!";
        })
    }



})