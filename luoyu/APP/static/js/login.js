$(function() {
    var flag1 = false;
    var flag2 = false;


        //检查用戶名格式
      function name(username) {
        // 以13x|15x|18x|开头，+8位数字结尾
        if( /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+(\d{8})$/.test(username) == false ) {

            //改变输入的提示信息
             flag1 = false;

            $(".tips4").html("用戶名格式不正确(以13x|15x|18x|开头，+8位数字结尾)");
        }
        else
            {
               flag1 = true;

                $(".tips4").html("格式正確");
            }
    }
    //keyup
    $(".name").keyup(function () {
        name( $(".name").val() );//调用，并且给上面的手机函数传参
        checkSub()
    });



    //检查密码格式
    function checkPwd(password) {
        if( (/(?=.*[\d]+)(?=.*[a-zA-Z]+)(?=.*[^a-zA-Z0-9]+).{6,20}/).test(password) == false) {
            flag2 = false;

            $(".tips2").html("密码输入不合法(由 6~20位 字母，數字，標點，組成)");
        } else {
            flag2 = true;

            $(".tips2").html("");
        }
    }
    //kyeup
    $(".password").keyup(function () {
        var pwd = $(".password").val();
        checkPwd(pwd);
        checkSub()
    });


    function checkSub() {
        if (flag1 && flag2){
            $('.thelogin').removeAttr('disabled')
        } else {
            $('.thelogin').attr('disabled', 'disabled')
        }
    }


    // 登錄

        $('#btn').click(function ()
    {
        console.log(flag1)
        console.log(flag2)


        if (flag1&&flag2)
        {

            // $('.theregister').removeAttr('disabled')
            console.log($(".name").val())
            console.log($(".password").val())


            $.ajax
            ({
                    url:'/login_api/',
                    type:'post',
                    data:{
                            'name':$(".name").val(),
                            'password':$(".password").val()
                        },
                    success:function (response)
                    {

                        console.log(response)
                        if (parseInt(response.returnCode)) {   // 登錄成功

                           $(".tips7").html(response.msg);
                            // window.open('/', target = '_self')

                            var token = response.returnValue.token
                             $.ajax({
                                    url:'/index_api/',
                                    type:'post',
                                    data:{'token':token},
                                    success:function (response1){
                                        console.log(response1)
                                        // $.ajax({
                                        //     url:'/index_api/',
                                        //     type:'/get/'
                                        //
                                        // })
                                        // window.open('/?token=' + token, target = '_self')
                                        // 本地調試
                                        // location.href='127.0.0.1/login/?token=' + token
                                        // 上線
                                        location.href='120.78.222.145/login/?token=' + token
                            }

                            })
                            //  window.open('/orderdetail/' + response.identifier + '/', target = '_self')
                            // window.open('/?token=' + token, target = '_self')
                            //  window.open('/', target = '_self')
                        } else {    // 登錄失敗

                            $(".tips7").html(response.msg);
                        }

                    }
            })

        }
        else
        {

            $(".tips6").html("請正確的填寫");
        }



    })




})