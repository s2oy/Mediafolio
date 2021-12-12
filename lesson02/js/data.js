function navScroll(){
    // nav
    $('nav>ul>li>a').on('click',function(e){
        let str = $(this).attr('href');
        // console.log(str, headerH);
        let navPos = $(str).offset().top;
        // console.log(navPos);
        $('body,html').animate({scrollTop:navPos},1000);
        return false;
    });

    $('aside>ul>li>a').on('click', function(e){
        let str = $(this).attr('href');
        let navPos = $(str).offset().top;
        $('body,html').animate({scrollTop:navPos},1000);
        return false;
    });
    $('#top').on('click',function(){});
    //top
}