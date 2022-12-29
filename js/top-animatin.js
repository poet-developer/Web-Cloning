(function(){
     const btn = document.querySelector('#top-btn');
     btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo(0,0);
     })
}());