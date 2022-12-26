(function () {
               const contentElem = document.querySelector('.splide__list');

               const data = [{ cover : 'https://picsum.photos/500', title : 'title1',desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ratione quia ad iusto, enim provident magnam, pariatur voluptatem qui ipsa, excepturi quae in tempora! Doloremque possimus placeat iusto eos omnis.', color: 'rgba(255, 101, 101, 0.5)' },
               { cover : 'https://picsum.photos/400', title : 'Loror si Lorem ipsum dolor si Lorem ipsum dolor si',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit temporibus deleniti nesciunt quibusdam impedit animi.', color: 'rgba(255, 156, 99, 0.5)' },
               { cover : 'https://picsum.photos/500', title : 'em ipsum dolor sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit temporibus deleniti nesciunt quibusdam impedit animi.', color: 'rgba(255, 232, 101, 0.5)' },
               { cover : 'https://picsum.photos/400/500', title : 'emr sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum reprehenderit accusamus, autem quis corporis amet fugit. Dolor, sit t', color: 'rgba(101, 224, 255, 0.5' },
               { cover : 'https://picsum.photos/700', title : 'em ipsum dolor sit',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum', color: 'rgba(61, 42, 46, 0.5)' },
               { cover : 'https://picsum.photos/450', title : 'title5',desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione voluptate dicta sint, quas laborum', color: 'rgba(120, 100, 93)' }
               ]

               function init() {
                    makeContent(data);
               }
               

               //data를 받아 Dom 생성
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
                         newDiv.style.background = data[i].color
                         contentElem.appendChild(newDiv);
                    }
               }

               init();

          })();