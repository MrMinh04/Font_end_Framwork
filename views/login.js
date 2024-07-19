myApp.controller('Login', function ($scope, $http, $window) {
    $scope.info = {
        id: "",
        pass: ""
    };

    $scope.onClickSubmit = function () {
        // $window.sessionStorage.clear();
        if ($scope.info.id === "" || $scope.info.pass === "") {
            alert("Vui lòng điền đầy đủ thông tin đăng nhập.");
            return;
        }

        $http({
            method: "GET",
            url: "http://localhost:3000/account"
        }).then(function (response) {
            // Kiểm tra xem thông tin đăng nhập có trùng khớp với thông tin từ phản hồi không
            var matchedAccount = response.data.find(function (account) {
                return account.id === $scope.info.id && account.pass === $scope.info.pass;
            });

            if (matchedAccount) {
                // Lưu thông tin đăng nhập vào session
                $window.sessionStorage.setItem('loggedIn', true);
                $window.sessionStorage.setItem('userId', matchedAccount.id);
                // Đăng nhập thành công
                alert("Đăng nhập thành công!");
                // Chuyển hướng người dùng đến trang chính hoặc trang sau khi đăng nhập thành công
                window.location.href = '#!';
            } else {
                // Đăng nhập thất bại
                alert("Tên đăng nhập hoặc mật khẩu không đúng.");
            }

        }).catch(function (error) {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
            alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
        });
    };
    // var isLoggedIn = window.sessionStorage.getItem('loggedIn');
    var userId = window.sessionStorage.getItem('userId');
    $scope.userId = userId;
    console.log(userId);
});

