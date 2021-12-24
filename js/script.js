import LocomotiveScroll from 'locomotive-scroll';

var navBar=document.querySelector('#nav .container-fluid .navbar-header button span');
var button=document.querySelector('#nav .container-fluid .navbar-header button');
navBar.setAttribute('class','fa fa-navicon');
navBar.style.cssText='color:#fff; border:none; font-size:20px';
button.addEventListener('click',()=>{
    if(navBar.getAttribute('class')=='fa fa-navicon'){
        navBar.setAttribute('class','fa fa-close');
        navBar.style.cssText="color:#000;font-size:20px";
    }
    else{
        navBar.setAttribute('class','fa fa-navicon');
        navBar.style.cssText='color:#fff; border:none; font-size:20px';
    }
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone:{
        smooth:false
    }
});
