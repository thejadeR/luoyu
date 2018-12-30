$(function () {
    console.log('jinru js')

    // 用戶名旗子開關
    var flag2 = false;

    // 密碼旗子開關
    var flag3 = false;

    // 第二次密碼旗子開關
    var flag4 = false;

    // 郵箱旗子開關
    var flag5 = false;


    // email( $(".email").val() )
    // password( $(".password").val() )
    // uname( $(".name").val() )
    //設置郵箱
    // 定义一个郵箱函数
    function email(num) {
        //
        if (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(num) == false) {

            //改变输入的提示信息

            $(".tips5").html("郵箱格式不正确");
            flag5 = false;
        } else {

            $(".tips5").html("");
            flag5 = true;
        }
    }

    $(".email").keyup(function () {
        email($(".email").val());//调用，并且给上面的郵箱函数传参
    });


    // 第二次郵箱验证，验证是否被注册
    $('.email').blur(function () {

        var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        if (reg.test($(this).val())) { // 符合要求
            // 发起ajax请求　　>>> 　邮箱是否可用　？？？
            $.ajax
            ({
                url: '/check_email/',
                type: 'get',
                data: {'email': $(this).val()},
                success: function (response) {

                    if (parseInt(response.returnCode)) {   // 可用
                        console.log('可用')
                        $(".tips5").html(response.msg);
                        flag5 = true;
                    }
                    else {    // 不可用
                        console.log('不可用')
                        $(".tips5").html(response.msg);
                        flag5 = false;
                    }
                }
            })

        }
        else {    // 不符合要求

            $(".tips5").html("郵箱格式不正确");
            flag5 = false;

        }


    })


    //设置密码
    // 定义密码函数
    function password(pwd) {
        if (/(?=.*[\d]+)(?=.*[a-zA-Z]+)(?=.*[^a-zA-Z0-9]+).{6,20}/.test(pwd) == false) {
            //改变输入的提示信息

            // $(".password").attr({"class": "u-btn-pwd txtno"});//文本框的颜色

            $(".tips3").html("密码格式不正确(由 6~20位 字母，數字，標點，組成)");
            flag3 = false;
        } else {
            // $(".password").attr({"class": "u-btn-pwd txtyes"});

            $(".tips3").html("");
            flag3 = true;
        }
    }


    $(".password").keyup(function () {
        password($(".password").val());//调用，并且给密码函数传参
    });


    //2次
    function password2(pwd2) {
        if (/(?=.*[\d]+)(?=.*[a-zA-Z]+)(?=.*[^a-zA-Z0-9]+).{6,20}/.test(pwd2) == false) {
            //改变输入的提示信息

            // $("#pwd2").attr({"class": "u-btn-pwd txtno"});//文本框的颜色

            $(".tips4").html("密码格式不正确");
            flag4 = false;
        } else {
            // $("#pwd2").attr({"class": "u-btn-pwd txtyes"});

            $(".tips4").html("");
            flag4 = true;
        }
    }


    $(".password2").blur(function () {
        var pwd1 = $('.password').val()
        var pwd2 = $(this).val()

        if (pwd1 == pwd2) {   // 符合
            flag4 = true
            // $(".pwd2").attr({"class": "pwd2 yes"});
            $(".tips4").html("可行");
        } else {   // 不符合
            flag4 = false
            $('.tips4').html('两次密码输入不一致')

        }


    });


    //設置用戶名
    // 定义一个用戶名函数
    function uname(str) {
        //
        if (/^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/.test(str) == false) {

            //改变输入的提示信息
            console.log('jinru用戶名')
            $(".tips2").html("用戶名格式不正确(以13x|15x|18x|开头，+8位数字结尾)");
            $('#tip2 img').css('display', 'inline-block')
            flag2 = false;
        } else {

            $(".tips2").html("用戶名可用");
            flag2 = true;
        }
    }

    $(".name").keyup(function () {
        uname($(".name").val());//调用，并且给上面的用戶名函数传参
    });


    // 第二次用戶名验证，验证是否被注册
    $('.name').blur(function () {


        var reg = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/
        if (reg.test($(this).val())) { // 符合要求
            // 发起ajax请求　　>>> 　用戶名是否可用　？？？
            $.ajax
            ({
                url: '/check_name/',
                type: 'get',
                data: {'name': $(this).val()},
                success: function (response) {

                    // console.log(response)
                    // $('.tips4').html(response.msg)
                    if (parseInt(response.returnCode)) {   // 可用

                        $(".tips2").html(response.msg);
                        flag2 = true;
                    } else {    // 不可用

                        $(".tips2").html(response.msg);
                        flag2 = false;
                    }
                }
            })

        }
        else {    // 不符合要求

            $(".tips2").html("用戶名格式不正确(以13x|15x|18x|开头，+8位数字结尾)");
            flag2 = false;

        }


    })


    $('#btn').click(function () {
        // email($(".email").val())
        // $(".email").trigger("blur")

        // password($(".password").val())

        // uname($(".name").val())
        // $(".name").trigger("blur")

        console.log(flag2)
        console.log(flag3)
        console.log(flag4)
        console.log(flag5)
        if (flag2 && flag3 && flag4 && flag5) {

            // $('.theregister').removeAttr('disabled')
            console.log($(".name").val())
            console.log($(".password").val())
            console.log($(".email").val())


            $.ajax
            ({
                url: '/register_api/',
                type: 'post',
                data: {
                    'name': $(".name").val(),
                    'password': $(".password").val(),
                    'email': $(".email").val()
                },
                success: function (response) {

                    console.log(response)
                    if (parseInt(response.returnCode)) {   // 註冊成功

                        $(".tips7").html(response.msg);


                        setTimeout(tologin, 5000);

                    } else {    // 註冊失敗

                        $(".tips7").html(response.msg);

                        function tips7() {
                            $(".tips7").html('');
                        }

                        setTimeout(tips7, 5000)
                    }

                }
            })

        }
        else {

            $(".tips6").html("請正確的填寫");

            function tips6() {
                $(".tips6").html("");
            }

            setTimeout(tips6, 5000)
        }


    })


    function tologin() {
        // window.open('120.78.222.145/login/', target = '_self')
        // 本地調試
        //  location.href='127.0.0.1/login/'

        // 上線
        location.href='120.78.222.145/login/'
    }


})