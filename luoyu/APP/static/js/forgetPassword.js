$(function () {


    console.log('jinru js')

    // 定义密码函数
    function password0(pwd) {
        if (/(?=.*[\d]+)(?=.*[a-zA-Z]+)(?=.*[^a-zA-Z0-9]+).{6,20}/.test(pwd) == false) {
            //改变输入的提示信息

            // $(".password").attr({"class": "u-btn-pwd txtno"});//文本框的颜色

            $(".tips1").html("密码格式不正确(由 6~20位 字母，數字，標點，組成)");
            flag1 = false;
        } else {
            // $(".password").attr({"class": "u-btn-pwd txtyes"});

            $(".tips1").html("");
            flag1 = true;
        }
    }


    $(".oldpassword").keyup(function () {
        password0($(".oldpassword").val());//调用，并且给密码函数传参
    });


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

            $(".tips4").html("两次密码不正确");
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


    $('.btn').click(function () {
        console.log(flag1)
        console.log(flag3)
        console.log(flag4)


        if (flag1 && flag3 && flag4) {

            // $('.theregister').removeAttr('disabled')
            console.log($(".name").val())
            console.log($(".password").val())


            $.ajax
            ({
                url: '/check_password/',
                type: 'post',
                data: {
                    'oldpassword': $(".oldpassword").val(),
                    'newpassword': $(".password").val(),
                    'newpassword2': $(".password2").val()
                },
                success: function (response) {

                    console.log(response)
                    if (parseInt(response.returnCode)) {   // 登錄成功

                        $(".tips7").html(response.msg);
                        window.open('/', target = '_self')

                    } else {    // 登錄失敗

                        $(".tips7").html(response.msg);
                    }

                }
            })

        }
        else {

            $(".tips6").html("請正確的填寫");
        }


    })


})