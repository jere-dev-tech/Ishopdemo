$(document).ready(function(){

 const imgs = document.querySelectorAll('.img-select a');
         const imgBtns = [...imgs];
         let imgId = 1;
         
         imgBtns.forEach((imgItem) => {
		
             imgItem.addEventListener('click', (event) => {
			 
                 event.preventDefault();
                 imgId = imgItem.dataset.id;
				
                 slideImage();
             });
         });
         
         function slideImage(){
             const displayWidth = document.querySelector('.product_slider img:first-child').clientWidth;
         
             document.querySelector('.product_slider').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
         }
         
         window.addEventListener('resize', slideImage);
		 


});