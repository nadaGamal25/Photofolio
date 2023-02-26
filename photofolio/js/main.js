// img slider
let imgs=Array.from(document.getElementsByClassName('imgs'));
let currentIndex=0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click',function(e){
        currentIndex=imgs.indexOf(e.target)
        let currentSrc= $(e.target).attr('isrc');
        $('.slider-container').css('display','flex')
        $('.slider-item').css('backgroundImage',`url(../photofolio/${currentSrc})`)
    })    
}

$('#close').click(function () { 
    $('.slider-container').css('display','none')   
});

function getNext(){
    currentIndex++;
    if(currentIndex == imgs.length){
        currentIndex=0;
    }
    let currentSrc= $(imgs[currentIndex]).attr('isrc');
    $('.slider-item').css('backgroundImage',`url(../photofolio/${currentSrc})`)
}
$('#next').click(function(){
    getNext();
})

function getPrev(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex=imgs.length -1;
    }
    let currentSrc= $(imgs[currentIndex]).attr('isrc');
    $('.slider-item').css('backgroundImage',`url(../photofolio/${currentSrc})`)
}
$('#prev').click(function(){
    getPrev();
})

// up btn
$(window).scroll(function () { 
    let windowScroll= $(window).scrollTop();
    if(windowScroll > 100){
        $('#upBtn').fadeIn(500);    
    }else{
        $('#upBtn').fadeOut(500);    
    }
});

$('#upBtn').click(function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
});
//services
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});