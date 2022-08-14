'use strict';

/*
Author:Haakon Johansen
*/

let blog= document.querySelectorAll('.blog-item-title,.blog-category,.blog-text');
blog.forEach(blog=>{
   let rnd = Math.floor(Math.random()*2500);
   blog.style.background =`#${rnd}`;
   blog.innerText = "just random text";

});

  //this just makes every progress-bar on the skills page to darkhaki from 0 to 5.

  const prog_bg = document.querySelectorAll('.skill-progress-bg');

  for(let j=0; j <= prog_bg.length-5; j++) {
     prog_bg[j].children[0].style.background="darkkhaki";
  }

(function(){
 

/*
this just refresh / redraws the pages when clicking on the navigation links. instead of 
having bunch of different static pages. This is what makes the website sort of dynamic 
by just using the DOM to display whatever content and removing when you click another
navbar.

*/
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


navigationLinks.forEach(navigationLinks => {

 navigationLinks.addEventListener('click',()=>{
   pages.forEach(pages =>{
      //has to make it lowercase so it matches the data-value
     if(navigationLinks.innerHTML.toLowerCase() === pages.dataset.page){
         pages.classList.add('active');
         navigationLinks.classList.add('active');
         window.scrollTo(0,0);
     }
     else {
      pages.classList.remove('active');
      navigationLinks.classList.remove('active');
      }

  });
 });
});


   //this just makes some of the images on Portifolio gray when hover

   const all_img = document.querySelectorAll('img');
   const all_figs = document.querySelectorAll('.project-img');

 

   all_figs.forEach(all_figs=>{
   all_figs.onmousemove = (e)=>{
        all_figs.style.filter="grayscale(100%)";
   

   };
   all_figs.onmouseout = (e)=>{
       all_figs.style.filter="grayscale(0%)";
  
   };
   });

   for(let i=3; i <= all_img.length; i++){
      let rnd = Math.floor(Math.random()*200);
      all_img[i].src=`https://picsum.photos/${rnd}`;
      all_img[i].style.objectFit="cover";
   }


})();
  

 

  