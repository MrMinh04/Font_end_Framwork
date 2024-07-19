myApp.controller('Login', function($scope, $http){
    $scope.info = {
        id: "",
        pass: ""
    }

    // $scope.check = {
    //     trangThai: true, // true = form hợp lệ | false = Form không hợp lệ
    //     noiDung: ""
    // }

    $scope.onClickSubmit = function() {

        // $scope.check.trangThai = true;
        // $scope.check.noiDung = "";

        if ($scope.info.id === "" || $scope.info.pass === "") {
            alert("Vui lòng điền đầy đủ thông tin đăng nhập.");
            return;
        }

        $http({
            method: "GET",
            url: "http://localhost:3000/account"
        }).then(function(response){
            if ($scope.info = response.data) {
                // Đăng nhập thành công
                alert("Đăng nhập thành công!");
                // Chuyển hướng người dùng đến trang chính hoặc trang sau khi đăng nhập thành công
                // window.location.href = 'trang-chinh.html';
            }else {
                // Đăng nhập thất bại
                alert("Tên đăng nhập hoặc mật khẩu không đúng.");
            }
        })
    }
})