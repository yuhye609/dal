$(document).ready( function(){
    $('header').load('include/header.html',function(){
        
    $('html').click(function(e) {
        console.log(e.target)

        if (!$(e.target).hasClass('choice')) {
            $('.language').hide();
        }
        if (!$(e.target).hasClass('title')) {                
            $('.title_list').slideUp()
        }
    });

        $('.lang').click(function(e){
            $('.language').toggle();
            return false
        });
        
        
        
        
        $('.language li').click(function(){
            let langChoice= $(this).text();
        
            $('.choice').text(langChoice);
        })




        let url = window.location.href

        $('.gnb a').each(function(){
            let gnbText = $(this).text();
            $(this).html('<span>'+gnbText+'</span>')
        })




        $('.gnb a').each(function(){

            let gnbHref = $(this).attr('href');
            
            if(url.indexOf(gnbHref) > -1){
                $(this).css({color:'green'});
                $(this).parent('li').addClass('on');
        
                let gnbHtml = $(this).parents('.lnb').html();
                let h2text = $(this).text();
                let gnbPage =$(this).parents('.lnb').siblings('a').text();
                let gnbEng =$(this).parents('.lnb').siblings('a').attr('data-eng');
                $('#visual_sub .text strong').text(gnbPage)
                $('#visual_sub .text p').text(gnbEng)
        
        
                $('.snb').html(gnbHtml);
                $('#content_box h2').text(h2text);
            
            }
        
        })


        function snbAction(){
            let snbOnW = $('.snb li.on span').width()
            let snbOnL = $('.snb li.on span').position().left
            $('.snb_box .line').css({left:snbOnL, width:snbOnW})
        }

        snbAction();

        $(window).resize(function(){
            snbAction();
        })


        /* snb */
        $('.snb li').mouseenter(function(){
            let snbLiW = $(this).find('span').width();
            let snbLiL = $(this).find('span').position().left

            $('.snb_box .line').css({left:snbLiL, width:snbLiW})
        })
    

        $('.snb').mouseleave(function(){
            snbAction();
        })

       

    });


        /*로고이미지 src 글자변경
        $('header h1').mouseover(function(){
        let h1Img= $('header h1 img').attr('src');
        console.log(h1Img)

        let h1ImgOver =h1Img.replace('.png','_o.png')
        console.log(h1ImgOver)

        $('header h1 img').attr('src',h1ImgOver)*/



        $(window).scroll(function(){
                let scrT =$(window).scrollTop();
                console.log(scrT)

                $('#visual').css({backgroundSize:100+scrT/10+'%'});
                $('visual .model').css({top:100-scrT/5+'px'})



                if(scrT >=100){
                    $('header nav').addClass('on')
                } else {
                    $('header nav').removeClass('on')

                }



        });
        /* notice롤링

        setInterval(함수,반복시간)
        clearInterval(반복되는걸 멈추는것)

        setTimeout(함수,예약시간)
        clearTimeout()*/

        let notiRoll= setInterval(noticeRolling,2000)

        function noticeRolling(){

            $('.notice ul').animate({top:'-100%'}, function(){
                $('.notice ul li').eq(0).appendTo($('.notice ul'))
                $('.notice ul').css({top:0})

            })
        }

        $('.notice').mouseenter(function(){
            clearInterval(notiRoll)
        });

        $('.notice').mouseleave(function(){
        notiRoll= setInterval(noticeRolling,2000)
        })



        
    /*   로그인페이지 현재페이지 표시 2.20화   */
    let url = window.location.href

    $('.member a').each(function(){
        let memHref = $(this).attr('href');

        if(url.indexOf(memHref) > -1){
            $(this).css({color:'green'}).parent('li').addClass('on')
            let memH2 = $(this).text()
            $('#content_box h2').text(memH2)
        } else if(url.indexOf('join') > -1){
            $('.member a').css({color:'green'}).parent('li').addClass('on')
            let memH2 = $('.member a').eq(2).text()
            $('#content_box h2').text(memH2)
        }
    })

    

    // 회원가입 페이지 구분
    if(url.indexOf('join_people') > -1){
        $('.join_people').show()
    }

    if(url.indexOf('join_company') > -1){
        $('.join_company').show()
    }




     //회원가입버튼 2/22 

     $('.join_ok').click(function(){
        let joinAgree =$('#rule_agree').is(':checked')
        let ruleAgreeTop =$('.rule_box').offset().top;

        if(!joinAgree){
           // alert('이용약관에 동의해 주셔야 합니다.');
           $('html').animate({scrollTop:ruleAgreeTop});
           $('.rule_box label').css({border:'2px dotted crimson'})
            return false
        }
     })

    //  게시판

    $('.board_page .title').click(function(){
        $('.title_list').slideToggle(200)
        $('.selectbox').toggleClass('on')
    })

    const urlSearch = new URLSearchParams(location.search);
    

    if(urlSearch.get('board_num') =='01'){
        $('.board_page h2').text('자유게시판')
    }

    $('#file_select').change(function(){
        var fileName =$(this).val().split('\\').pop();
        $('.filezone').text(fileName || '파일을 선택해주세요');
    });


});









/*

// // 로그인 패스워드 눈 아이콘 1

    // $('.eye_on').click(function(){
    //     $(this).hide()
    //     $('.eye_off').show()
    //     $('.login_box input[name=pw]').attr('type', 'text')

    // })

    // $('.eye_off').click(function(){
    //     $(this).hide()
    //     $('.eye_on').show()
    //     $('.login_box input[name=pw]').attr('type', 'password')

    // })

    //로그인 패스워드 눈 아이콘 2
    $('.eye_box').click(function(){
        let $eyeInput = $(this).prev('input')
        $eyeInput.toggleClass('active');
       
        if($eyeInput.hasClass('active')){
            $('.eye_off').show()
            $('.eye_on').hide()
            $('.login_box input[name=pw]').attr('type','text')
        } else {

            $('.eye_off').hide()
            $('.eye_on').show()
            $('.login_box input[name=pw]').attr('type','password')
        }
    })
        전체창 나옴
        $('.gnb').mouseenter(function(){

            $('.lnb').fadeIn(200)
        })

        
        $('.gnb').mouseleave(function(){

            $('.lnb').fadeOut(200)
        })



        $('.gnb li').mouseover(function(){

            $(this).find('.lnb').stop().fadeIn(200)
        })

        
        $('.gnb li').mouseout(function(){

            $('.lnb').stop().fadeOut(200)
        })

        */

        /*메인 section5 번호넣기방법 1 for문

        for(let i=1; i<10; i++){
            $('#section5 li').eq(i).find('span.num').text('0'+(i+1))
        }

        */

        /*메인 section5 번호넣기방법 2each()
        $('#section5 li').each(function(){
            let liIndex = $(this).index()
            $(this).find('num').text('0'(liIndex+1))

        })


        /*메인 section5 번호넣기방법 3each()
        $('#section5 li').each(function(index, item){
        if(index+1 < 10){
            $(item).find('.num').text('0'(index+1))
        } else {
            $(item).find('.num').text(index+1)
        }
            
        });*/



        /*마우스위치 시작(새로고침 위치)
        let snbPosi = $('.snb .on span').position().left;
        let snbPosiW =$('.snb .on span').width();

        $('.line').css({left:snbPosi, width:snbPosiW})
    function snbAction(){
        let snbPosi = $('h1').offset().left;
        let snbPosiT =$('h1').offset().top;
        let snbPosiW =$('h1').width();
        let snbPosiH =$('h1').height();
        $('.line').css({left:snbPosi,width:snbPosiW,top:snbPosiT+snbPosiH})

    }
    snbAction()


        let snbPosi = $('h1').offset().left;
        let snbPosiT =$('h1').offset().top;
        let snbPosiW =$('h1').width();
        let snbPosiH =$('h1').height();
        $('.line').css({left:snbPosi,width:snbPosiW,top:snbPosiT+snbPosiH})

        $(window).resize(function(){
            let snbPosi = $('h1').offset().left;
        let snbPosiT =$('h1').offset().top;
        let snbPosiW =$('h1').width();
        let snbPosiH =$('h1').height();
        $('.line').css({left:snbPosi,width:snbPosiW,top:snbPosiT+snbPosiH})
        })
        

        /* snb :마우스움직이면 생기는:빨간밑줄  
        $('.snb li').mouseenter(function(){
        let snbLiW = $(this).find('span').width();
        //let snbLiW = $(this).find('span').css('width')크기를 알수있는 2가지방법임
        let snbLiL = $(this).find('span').position().left
        $('.snb_box .line').width(snbLiW);    //snb_box .line에 크기값을준다
            $('.snb_box .line').css({left:snbLiL})//snb_box .line에 css값을준다
        
        })*/ 


    // 현재 페이지 표시 스크립트
    //window.location.href.indexOf('찾고싶은단어')
    //http://127.0.0.1:5500/sub01_01.html# (도메인주소/숫자는 0부터시작)
    //console.log(window.location.href.indexOf('sub01'))


