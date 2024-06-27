
$(function () {
  $('a[href*="#"]:not([data-toggle="tab"], [data-toggle="collapse"], [data-slide="next"], [data-slide="prev"], .portfolio-btn)' || 'span.btn').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/****collapse mobile menu****/
$(function(){
var collapse = document.querySelectorAll("[data-toggle-area='collapse']");
    var i;

    for(i = 0; i < collapse.length; i++){
        collapse[i].addEventListener("click", function(){                
            var content = this.nextElementSibling;                
            if(content.style.maxHeight){
                content.style.maxHeight = null;                    
                this.classList.remove("open");                   
            }
            else {
                content.style.maxHeight = content.scrollHeight + "px";                    
                this.classList.toggle("open");
            }
        } )
    }
});

/******Script for modal *****/
$(function () {
/***Get modal button to open modal ***/
var modal_btn = document.querySelectorAll("a.portfolio-btn");
/****All modals ***/
var modalarea = document.querySelectorAll(".modal");
/*****close modals ****/
var close_modal = document.querySelectorAll("[data-dismiss]");
/*****Body element */
var body = document.querySelector("body");

/*****Call the modal ***/
for(let j = 0; j < modal_btn.length; j++){
modal_btn[j].onclick = function(e){
  e.preventDefault();
  var modal = document.querySelector(e.target.getAttribute("href"));
  modal.classList.add('show');
  body.classList.add('modal-open');
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  body.style.paddingInlineEnd = '15px';
  modal.style.display = "block";
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
};
}

/****Close the modal with close button****/
for(let i = 0; i < close_modal.length; i++){
close_modal[i].onclick = function(){
  for(let index in modalarea){
    if(typeof modalarea[index].style !== 'undefined'){
      modalarea[index].style.display = "none";
      modalarea[index].classList.remove('show');
    }        
    body.classList.remove('modal-open');
    body.style.height = "";
    body.style.overflow = "";
    body.style.paddingInlineEnd = "";
    const scrollY = body.style.top;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
  }
}
}


/*****click anywhere to close the modal***/
window.onclick = function(event){
if(event.target.classList.contains('modal')){
  for(var index in modalarea){
    if(typeof modalarea[index].style !== 'undefined'){
      modalarea[index].style.display = "none";
      modalarea[index].classList.remove('show');
    }    
    body.classList.remove('modal-open');
    body.style.height = "";
    body.style.overflow = "";
    body.style.paddingInlineEnd = "";
    
  }
}
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

});
