myApp.controller('productDetail', function ($http, $scope, $routeParams) {
    var userId = window.sessionStorage.getItem('userId');
    $scope.userId = userId;
    console.log(userId);

    $scope.product = {
        id: "",
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

    $http({
        method: "GET",
        url: "http://localhost:3000/product/" + $routeParams.id
    }).then(function (res) {
        $scope.product = res.data;
    })


    $scope.size = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/size"
    }).then(function (res) {
        $scope.size = res.data;
    })



    $scope.onClickSubmit = function () {
        if(userId == null){
            alert('Bạn cần đăng nhập trước');
            window.location.href = '#!login';
        }



        if (Object.keys($scope.cart).length !== 0) {
            $http({
                method: "PUT",
                url: "http://localhost:3000/cart/" + userId,
                data: $scope.cart
            }).then(function () {
                alert('Thêm vào giỏ hàng thành công thành công!');
                window.location.href = "#!cart";
            })
        }else{
            $http({
                method: "POST",
                url: "http://localhost:3000/cart",
                data: $scope.cart
            }).then(function () {
                alert('Thêm vào giỏ hàng thành công thành công!');
                window.location.href = "#!cart";
            })
        }
        
    }

    // ---------------------------------------------
    $scope.listProduct = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/product"
    }).then(function (res) {
        $scope.listProduct = res.data;
    })

    
})