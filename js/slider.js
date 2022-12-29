/**
 * 슬라이더 안에 들어가는 컨텐츠들을 js로 구현한다.
 * 서버에서 데이터를 받아오는 것을 염두한다.
 */

(function () {
               const contentElem = document.querySelector('.splide__list');

               const data = [{ cover : './img/1.jpg', title : 'title1',desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ratione quia ad iusto, enim provident magnam, pariatur voluptatem qui ipsa, excepturi quae in tempora! Doloremque possimus placeat iusto eos omnis.', color: 'rgba(255, 101, 101, 0.5)' },
               { cover : './img/2.jpg', title : 'Loror si Lorem ipsum dolor si Lorem ipsum dolor si',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit temporibus deleniti nesciunt quibusdam impedit animi.', color: 'rgba(255, 156, 99, 0.5)' },
               { cover : './img/3.jpg', title : 'em ipsum dolor sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit temporibus deleniti nesciunt quibusdam impedit animi.', color: 'rgba(15, 132, 101, 0.5)' },
               { cover : './img/4.jpg', title : 'emr sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit t', color: 'rgba(101, 130, 130, 0.8' },
               { cover : './img/5.jpg', title : 'em ipsum dolor sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum', color: 'rgba(61, 42, 46, 0.5)' },
               { cover : './img/6.jpg', title : 'title5',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum', color: 'rgba(120, 100, 93)' }
               ]
               
               const makeContent = (data) => {
                    for (var i = 0; i < data.length; i++) {
                         const newDiv = document.createElement("li");
                         const cover = document.createElement("div");
                         newDiv.classList.add('splide__slide');
                         newDiv.classList.add('slider-item');
                         cover.classList.add('cover');
                         cover.innerHTML = 
                         `<div 
                         class = "img"
                            style= "background-image: url(${data[i].cover});"></div>
                         <div 
                         style= "background: ${data[i].color};"
                         class = "article"
                         >
                        <h3 class="topic">기술</h3>
                        <h2 class="title">${data[i].title}</h2>
                            
                            <div class="desc">${data[i].desc}</div>
                            <button class="content-btn">&gt; 자세히 읽기</button>                         
                         </div>
                         `
                         newDiv.appendChild(cover);
                         newDiv.style.background = data[i].color;
                         contentElem.appendChild(newDiv);
                    }
               }
               //data를 받아 Dom 생성

               function init() {
                    makeContent(data);
               }
          

               init();

          })();