$(function () {
    console.log('進入index，js')
    //
    // $.ajax({
    //     url: '/index_api/',
    //     type: 'post',
    //     data: {'msg': 'give me user'},
    //     success: function (response) {
    //         console.log(response)
    //     }
    //
    //
    // })


    $.ajax({
        url: '/index_api/',
        type: 'get',
        data: {'msg': 'give me goods'},
        success: function (recv) {
            var mz_list = recv.returnValue1
            var nz1_list = recv.returnValue2
            var nz2_list = recv.returnValue3

            $('#list1').empty()

            for (var i = 0; i < mz_list.length; i++) {
                var mz_obj = mz_list[i]
                console.log(mz_obj.img)
                $('<li><a href="javascript:;"><img src="/static/images2/' + mz_obj.img + '/"><p>' + mz_obj.name + '</p><span>￥' + mz_obj.price + '</span></a></li>').appendTo('#list1')
            }

            $('.floor .main .list2').empty()
            for (var j = 0; j < nz1_list.length; j++) {
                var nz1_obj = nz1_list[j]
                // console.log(nz1_obj.img)
                $('<a href="javascript:;" class="cc"><img src="/static/images2/' + nz1_obj.img + '/"></a>').appendTo('.floor .main .list2')
            }

            $('#list3').empty()
            for (var k = 0; k < nz2_list.length; k++) {
                var nz2_obj = nz2_list[k]
                // console.log(nz2_obj.img)
                $('<li><a href="javascript:;"><img src="/static/images2/' + nz2_obj.img + '/">' + '<p>' + nz2_obj.name + '</p>' + '<span>￥' + nz2_obj.price + '</span></a></li>').appendTo('#list3')
            }

            // 用戶信息
            var user = recv.user
            console.log(user)
            console.log(user.name)
            if (user.name) {
                console.log('jinru gaibian')
                $('#sign_in').empty()
                $('<a href="/forgetPassword/" style="padding-left: 14px;">' + user.name + '</a>').appendTo('#sign_in')

                $('#sign_up').empty()
                $('<a class="logout" href="/" style="padding-left: 12px;">註銷</a>').appendTo('#sign_up')
            }


            $('#sign_up .logout').click(function () {
                console.log('dianji zhuxiao')

                $.ajax({
                    url: '/logout_api/',
                    success: function (recv1) {

                    }
                })
            })


        }

    })

    // $('#sign_up .logout').click(function () {
    //     console.log('dianji zhuxiao')
    //
    //     $.ajax({
    //         url:'/logout_api/',
    //         success:function (recv1) {
    //
    //         }
    //     })
    // })


})


onload = function () {
    function $(id) {
        return document.getElementById(id);
    }

    //头部ul部分
    //var ul = $("top-right").getElementsByTagName("ul")[0];
    var ali = $("top-right").getElementsByTagName("li");
    var oimg = $("top-right").getElementsByTagName("img");
//	var oimg2 = document.getElementsByClassName("weibo")[0];
    ali[0].children[0].onmouseenter = ali[1].children[0].onmouseenter = ali[5].children[0].onmouseenter = ali[6].children[0].onmouseenter = function () {
        this.style.color = "red";
    }
    ali[0].children[0].onmouseleave = ali[1].children[0].onmouseleave = ali[5].children[0].onmouseleave = ali[6].children[0].onmouseleave = function () {
        this.style.color = "";
    }
    ali[2].children[0].onmouseenter = oimg[0].onmouseenter = function () {
        oimg[0].style.display = "block";
    }
    ali[2].children[0].onmouseleave = oimg[0].onmouseleave = function () {
        oimg[0].style.display = "none";
    }
    ali[3].children[0].onmouseenter = oimg[1].onmouseenter = function () {
        oimg[1].style.display = "block";
    }
    ali[3].children[0].onmouseleave = oimg[1].onmouseleave = function () {
        oimg[1].style.display = "none";
    }
    ali[4].children[0].onmouseenter = oimg[2].onmouseenter = function () {
        oimg[2].style.display = "block";
    }
    ali[4].children[0].onmouseleave = oimg[2].onmouseleave = function () {
        oimg[2].style.display = "none";
    }

    //搜索
    var search_b = document.getElementsByClassName("search-b")[0];
    var ali1 = search_b.getElementsByTagName("li");
    for (var i = 1; i < ali1.length; i++) {
        ali1[i].onmouseenter = function () {
            this.children[0].style.color = "#e50163";
        }
        ali1[i].onmouseleave = function () {
            this.children[0].style.color = "";
        }
    }

    //导航栏
    var ali2 = $("nav1").getElementsByTagName("li");
    for (var i = 0; i < ali2.length; i++) {
        ali2[i].onmouseenter = function () {
            this.children[0].style.color = "#e50163";
            this.children[0].style.borderBottom = "4px solid #e50163";
        }
        ali2[i].onmouseleave = function () {
            this.children[0].style.color = "";
            this.children[0].style.borderBottom = "";
        }
    }

    var ali3 = $("nav2").getElementsByTagName("li");
    for (var i = 0; i < ali3.length - 1; i++) {
        ali3[i].onmouseenter = function () {
            this.children[0].style.color = "#e50163";
        }
        ali3[i].onmouseleave = function () {
            this.children[0].style.color = "";
        }
    }
    ali3[2].onmouseenter = function () {
        this.children[0].style.color = "white";
    }
    ali3[2].onmouseleave = function () {
        this.children[0].style.color = "#e50163";
    }


    //轮播图
    var list = $("list");
    var list2 = $("list2");
    // $.ajax({
    // 	url:"../json/banner.json",
    // 	success:function(data){
    // 		//console.log(data);
    // 		var arr = JSON.parse(data);
    // 		for(var i = 0; i < arr.length; i++){
    // 			var obj = arr[i];
    // 			//console.log(obj.banner[i]);
    // 			var li = document.createElement("li");
    // 			var li2 = document.createElement("li");
    // 			list.appendChild(li);
    // 			list2.appendChild(li2);
    // 			li.innerHTML = "<a href='#'><img src='"+obj.banner[0]+"'/></a><a href='#'><img src='"+obj.banner[1]+"'/></a><a href='#'><img src='"+obj.banner[2]+"'/></a><a href='#'><img src='"+obj.banner[3]+"'/></a>";
    // 		}
    // 		var ali_banner = list.getElementsByTagName("li");
    // 		var ali2_banner = list2.getElementsByTagName("li");
    // 		ali2_banner[0].className = "active";
    // 		//默认显示第一张图片
    // 		ali_banner[0].style.opacity = 1;
    // 		ali_banner[0].style.filter = "alpha(opacity=100)";
    //
    //
    // 		//开启定时器，开始轮播
    // 		var index = 0;
    // 		var timer = setInterval(function(){
    // 			index++;
    // 			move();
    // 		},30000);
    //
    // 		function move(){
    // 			if( index >= ali_banner.length){
    // 				index = 0;
    // 			}
    // 			if( index < 0){
    // 				index = ali_banner.length - 1;
    // 			}
    // 			//遍历下标，相等则动画显示
    // 			for (var i = 0; i < ali_banner.length; i++){
    // 				if(i == index){
    // 					animate(ali_banner[index],{opacity:100});
    // 				}
    // 				else {
    // 					animate(ali_banner[i],{opacity:0});
    // 				}
    // 			}
    //
    // 			for(var i = 0; i < ali2_banner.length; i++){
    // 				if( i == index){
    // 					ali2_banner[i].className = "active";
    // 				}
    // 				else{
    // 					ali2_banner[i].className = "";
    // 				}
    // 			}
    // 		}
    // 		for(var i = 0; i < ali2_banner.length; i++){
    // 			ali2_banner[i].index = i;
    // 				ali2_banner[i].onmouseenter = function(){
    // 					index = this.index;
    // 					move();
    // 				}
    // 		}
    // 	}
    //
    //
    // });

    //左边导航栏
    var ali_list = $("nav-list").getElementsByTagName("li");
    for (var i = 0; i < ali_list.length; i++) {
        ali_list[i].onmouseenter = function () {
            this.style.background = "#e50163";
            this.getElementsByClassName("show")[0].style.display = 'block';
        }
        ali_list[i].onmouseleave = function () {
            this.style.background = "";
            this.getElementsByClassName("show")[0].style.display = 'none';
        }
    }


//	//品牌推荐
//	var ali_tab = $("brank_nav").getElementsByTagName("li");
//	for(var i = 0; i < ali_tab.length; i++){
//		ali_tab[i].onmouseenter = function(){
//			this.className = "on";
//		}
//		ali_tab[i].onmouseleave = function(){
//			this.className = "";
//		}
//	}

    //轮播2
    var ali3 = $("list3").getElementsByTagName("li");
    var ali4 = $("list4").getElementsByTagName("li");
    ali3[0].style.opacity = 1;
//	ali4[0].children[0].style.color = "deeppink";
    //自动轮播
    var index = 0;
    var timer = setInterval(function () {
        index++;
        move1();
    }, 3000);

    function move1() {
        if (index >= ali3.length) {
            index = 0;
        }
        if (index < 0) {
            index = ali3.length - 1;
        }
        for (var i = 0; i < ali3.length; i++) {
            if (i == index) {
                animate(ali3[index], {opacity: 100});
            }
            else {
                animate(ali3[i], {opacity: 0});
            }
        }
        for (var i = 0; i < ali4.length; i++) {
            if (i == index) {
                ali4[i].children[0].className = "diff";
            }
            else {
                ali4[i].children[0].className = "";
            }
        }
    }

    for (var i = 0; i < ali4.length; i++) {
        ali4[i].index = i;
        ali4[i].onmouseenter = function () {
            index = this.index;
            move1();
        }
    }
    $("selection-list-l").onmouseenter = function () {
        clearInterval(timer);
    }
    $("selection-list-l").onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            move1();
        }, 3000);
    }
}


//商品详情用ajax请求
$(function () {
    //先获取所有商品的数据
    var arr = [];//保存json中所有商品数据
    $.get("../json/goods.json", function (data) {
        //console.log(data);
        arr = data;
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            //console.log(obj.img);
            //创建节点
            var dl = $("<dl></dl>").appendTo("#like-list");
            var dt = $("<dt><img src=" + obj.img + "></dt>").appendTo(dl);
            var dd = $("<dd></dd>").appendTo(dl);
            var a = $("<a href='#'>梦芭莎一字领创意拼接肌理<br />网纱五分袖间...</a>").appendTo(dd);
            $("<div class='price'><a href='#'><i>" + obj.unit + "</i><span>" + obj.price + "</span></a></div>").appendTo(dd);
        }
    })
    //点击商品
    $("#like-list").on("click", "dl", function () {
        var index = $(this).index();
        var obj = arr[index];
        //console.log(obj.id);

        //进入详情页， 且将当前点击的商品的id传入
        location.href = "detail.html?id=" + obj.id;
    })


    //快捷导航

    //大于品牌推荐的top值，显示左边快捷导航
    var brankTop = $("#brank").offset().top;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= brankTop) {
            $("#leftside").fadeIn();
        }
        else {
            $("#leftside").fadeOut();
        }
    })


    //表示是否点击了楼层按钮正在执行动画
    var isMoving = false;

    //点击楼层按钮， 让页面滚动到对应的楼层
    $("#left-nav li").click(function () {
        $(this).find(".second-pic").addClass("second-show").parent().parent().siblings().find(".second-pic").removeClass("second-show");
        var index = $(this).index();
        var top = $(".floor").eq(index).offset().top;

        isMoving = true;
        $("html,body").stop(true).animate({scrollTop: top}, function () {
            isMoving = false;
        });

    })

    //滚动页面
    $(window).scroll(function () {

        //如果没有点击楼层按钮执行动画， 则执行代码
        if (!isMoving) {
            var scrollTop = $(window).scrollTop();

            //遍历所有的楼层div
            var index = 0;
            $(".floor").each(function () {
                //每个楼层div的top值
                var top = $(this).offset().top;

                var winH = $(window).height(); //页面高度

                if (scrollTop + winH / 2 >= top) {
                    index = $(this).index(".floor");
                }
            })
            //console.log(index);
            $("#left-nav li").eq(index).find(".second-pic").addClass("second-show").parent().parent().siblings().find(".second-pic").removeClass("second-show");
        }

    })

    //点击返回回到顶部
    $("#backtop").click(function () {
        $(window).scrollTop(0);

    })


})
