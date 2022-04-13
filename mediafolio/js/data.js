function navScroll(){
    // nav // 
 $('nav>ul>li>a').on('click',function(e){
     let str = $(this).attr('href');
    let navPos = $(str).offset().top;
    let windowW = $('#wrap').width();
    // console.log(navPos);
    if(windowW < 980){
        let navW = $('nav').innerWidth();
        // $('nav').hide();
        $('#btn').show();
        $('nav').css('left','-'+navW+'px');
    }
    $('body,html').animate({scrollTop:navPos},1000);
    // resize() 문제 해결
    //  
    return false;
 });
//  aside>ul>li>a
$('aside>ul>li>a').on('click',function(e){
    let str = $(this).attr('href');
    let navPos = $(str).offset().top;
    $('body,html').animate({scrollTop:navPos},1000);

});

$('#top').on('click',function(e){
    $('body,html').animate({scrollTop:0},1000);
});
// top
}

function navBtn(){
    $('#btn').on('click',function(e){
        $(this).hide();
        $('nav').animate({left:0},400);
    });
    $('nav .close').on('click',function(e){
        let navWidth = $('nav').innerWidth();
        console.log(navWidth);
        $('nav').animate({left:'-'+navWidth+'px'},400,function(){
            $('#btn').show();
        });

    })
}

// 
function gallery(){
//  준비하기
   let figureW = $('#all>figure').width();
    console.log(figureW);
    $('#all>figure:last').prependTo('#all');
    $('#all').css('margin-left','-'+figureW+'px');
//  .left <-  .right ->
    $('#box03 .left').on('click',function(){
        $('#all').animate({marginLeft:'-='+figureW+'px'},800,function(){
            $('#all>figure:first').appendTo('#all');
            $('#all').css('margin-left','-'+figureW+'px');
        });
    });
    $('#box03 .right').on('click',function(){
        $('#all').animate({marginLeft:'+='+figureW+'px'},800,function(){
            $('#all>figure:last').prependTo('#all');
            $('#all').css('margin-left','-'+figureW+'px');
        });
    });
}

function formData(){
    let $liForm  = $('#box04 li>input, #box04 li>textarea');
    $liForm.removeAttr('placeholder');
    $liForm.on('focus',function(e){
        $(this).prev('label').fadeOut(400);
    });
    $liForm.on('blur',function(e){
        let str = $(this).val();
        if(str == ""){
            $(this).prev('label').fadeIn(400);
        }
        //$(this).prev('label').fadeIn(400);
    });
}


