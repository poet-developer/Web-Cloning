/**
 * 탭 안에 들어가는 컨텐츠들을 js로 구현한다.
 * 서버에서 데이터를 받아오는 것을 염두한다.
 * 토픽 별로 정렬이 달리될것.
 */

(function(){
     const girdContainer = document.querySelector('.grid-container');
     const tab = document.querySelector('.card-tab');
     let currentTab = '추천';
     const dummyData = [
          {id : 0,title: '제목1', topic: '추천 지속가능경영', desc:'elit. At voluptas perspiciatis dolores quasi suscipit, aliquam, dolorem adipisci minima optio', cover:'./img/1.jpg'},
          {id : 1,title: '제목2', topic: '추천 사람문화', desc:'elit. At voluptas dolorem adipisci minima optio', cover:'./img/2.jpg'},
          {id : 2,title: '제목3', topic: '추천 기술 보도자료', desc: 'accusantium quisquam! Perspiciatis reiciendis doloremque numquam a provident rem dicta co', cover:'./img/3.jpg'},
          {id : 3,title: '제목4', topic: '추천 지속가능경영 보도자료', desc : 'accusantium quisquam! Perspiciatis reicies reiciendis doloremque numquam a provident rem dicta co', cover:'./img/4.jpg'},
          {id : 4,title: '제목5', topic: '추천 보도자료', desc: 'accusantium quisquam! erspiciatis dolores quasi suscipit, aliquam, dolo', cover:'./img/5.jpg'},
          {id : 5,title: '제목6', topic: '추천 지속가능경영 보도자료' ,desc: 'At voluptas perspiciatis dolores quasi suscipit, aliquam, dolo', cover:'./img/6.jpg'},
          {id : 6,title: '제목7', topic: '추천 기술 사람문화 지속가능경영 보도자료', desc :'usantium quisquam! Perspiciatis reiciendis doloremque numquam a provident rem', cover:'./img/1.jpg'},
          {id : 7, title: '제목8', topic: '추천 기술 지속가능경영 보도자료', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptas perspiciatis dolores quasi suscipit, aliquam, dolorem', cover:'./img/2.jpg'},
          {id : 8, title: '제목9', topic: '추천 기술 사람문화 지속가능경영 보도자료', desc: 'Lorem, ipr sum dolor sit amet consectetuadipisici perspiciatis dolores quasi suscipit, aliquam, dolorem', cover:'./img/3.jpg'},
          {id : 9, title: '제목10', topic: '추천 기술 사람문화 지속가능경영 보도자료', desc:'Ldolorem', cover:'./img/4.jpg'},
          {id : 10, title: '제목11', topic: '추천 사람문화 보도자료', desc:'lorem adipisci minima opti', cover:'./img/5.jpg'},
          {id : 11, title: '제목12', topic: '추천 기술 사람문화 지속가능경영 보도자료', desc:'lorem a minima optilorem adipisci minima opti', cover:'./img/6.jpg'},
          {id : 12, title: '제목13', topic: '추천 기술', desc: 'elit. Nam provident neceuntur iste sequi molestias earum minima', cover:'./img/1.jpg'},
          {id : 13, title: '제목14', topic: '추천 기술', desc: 'non esse consequuntur iste sequi molestias earum minima quos ratione optio corporis quam natus voluptatibus?', cover:'./img/2.jpg'},
          {id : 14, title: '제목15', topic: '추천 기술 사람문화 지속가능경영 보도자료', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam provident necessitatibus, vitae doloribus obcaecat', cover:'./img/3.jpg'},
          {id: 15, title: '제목16', topic: '추천 보도자료', desc: 'necessitatibus, vitae doloribus obcaecat', cover:'./img/4.jpg'},
     ]
     // 서버에서 온 전체 데이터 (Dummy DB)

     let filteredData = []; // 탭 모드로 걸러진 data
     const getMode = (item) => {
          item.addEventListener('click',(e)=>{
               e.preventDefault();
               currentTab = e.target.dataset.tab;
                    filteredData = getContents(dummyData)
                    createElement(filteredData) // 클릭할때마다 탭 모드에 해당하는 data를 불러온다.
          })
     // tab클릭 이벤트 : 정렬기능
     }

     const checkContents = (data) => {
          let _containedMode = [];
          for(var i = 0; i< data.length; i++){
               _containedMode.push(data[i].topic.split(' ').some((elem)=>{
                    return elem === currentTab
               }));
          }
          return _containedMode
          // 현재 tabMode와 한개라도 같은 data-topic요소가 있으면 true/false를 반환하여 새로운 배열에 저장한다.
     }


     const getContents = (data) => {
          let _containedMode =checkContents(data);
          let _filteredData = [];
          for(var i = 0; i< data.length; i++){
               if(_containedMode[i]){
                    _filteredData.push(data[i])
               }
          }
          //배열에 true를 반환한 값만 찾아 그 순서에 대응하는 data값을 새로운 배열에 저장.
          return _filteredData

     }

     const createElement = (data) => {
          girdContainer.innerHTML = '';
          for(var i =0; i < data.length; i++){
                    const newDiv = document.createElement("div");
                    newDiv.classList.add('grid-item')
                    newDiv.setAttribute('data-topic',data[i].topic);
                    newDiv.innerHTML = `<div class = 'image' style = "background-image: url(${data[i].cover});"></div><div class = 'box'><h4 class = 'title'>${data[i].title}</h4><br><h5 class = 'topic'>${data[i].topic}</h5><br><p class = 'desc'>${data[i].desc || ''}</p></div>`;
                    girdContainer.append(newDiv);
               // 이미지, 제목, 장르, 설명
               }
     }

     const init = () => {
          filteredData = getContents(dummyData) // 맨처음은 추천 항목을 보여준다.
          getMode(tab) // 클릭이벤트 감지
          createElement(filteredData) // 추천 탭 데이터 가져오기
     } // 최초실행 함수
     

     init();
}())