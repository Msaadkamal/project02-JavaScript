const bgImg=document.querySelector(".bgImg");
window.addEventListener('scroll',()=>{
    bgImg.style.opacity= 1- window.pageYOffset/800;
    bgImg.style.  backgroundSize= 160 -window.pageYOffset /11 +'%';
})
