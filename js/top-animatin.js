/**
 * 버튼을 누르면 스크롤 처음으로 올아가도록 한다.
 */

(function(){
     const btn = document.querySelector('#top-btn');
     btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo(0,0);
     })
}());