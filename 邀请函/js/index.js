 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     
     navigation:{
         nextEl:'.swiper-button-next',
         
     },
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    },
     
    });


var music=document.querySelector('.music');
var mus=document.querySelector('.mus');
var gif=document.querySelector('.gif');
var audio=document.querySelector('audio');
var flag=1;
music.onclick=function(){
    if(flag==1){
        mus.style.animation="none";
        gif.display="none";
        audio.pause();
        flag=0;
    }else{
        mus.style.animation="music 1.8s  linear infinite";
        gif.display="block";
        audio.play();
        flag=1;
    }
}