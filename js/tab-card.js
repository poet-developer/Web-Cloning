(function(){
     const girdContainer = document.querySelector('.grid-container');
     const tabItems = document.querySelectorAll('.tab-list');
     let currentTab = '추천';
     const dummyData = [
          {id : 0,title: 'Adsdsdsd', topic: '추천 기술 사람문화'},
          {id : 1,title: 'B', topic: '추천 사람문화'},
          {id : 2,title: 'C', topic: '추천 기술 지속가능경영 보도자료'},
          {id : 3,title: 'D', topic: '추천 지속가능경영 보도자료'},
          {id : 4,title: 'E', topic: '추천'},
          {id : 5,title: 'F', topic: '추천 지속가능경영 보도자료'},
          {id : 6,title: 'A', topic: '추천 기술 사람문화 지속가능경영 보도자료'},
          {id : 7, title: 'B', topic: '추천 기술 지속가능경영 보도자료'},
          {id : 8, title: 'C', topic: '추천 기술 사람문화 지속가능경영 보도자료'},
          {id : 9, title: 'D', topic: '추천 기술 사람문화 지속가능경영 보도자료'},
          {id : 10, title: 'E', topic: '추천 사람문화 보도자료'},
          {id : 11, title: 'F', topic: '추천 기술 사람문화 지속가능경영 보도자료'},
          {id : 12, title: 'A', topic: '추천 기술'},
          {id : 13, title: 'B', topic: '추천 기술'},
          {id : 14, title: 'C', topic: '추천 기술 사람문화 지속가능경영 보도자료'},
          {id: 15, title: 'D', topic: '추천 보도자료'},
     ]
     // 서버에서 온 전체 데이터 (Dummy DB)

     let filteredData = []; // 탭 모드로 걸러진 data
     const getMode = (items) => {
          for( var i =0; i<items.length; i++){
          items[i].addEventListener('click',(e)=>{
               e.preventDefault();
               currentTab = e.target.dataset.tab;
                    filteredData = getContents(dummyData)
                    createElement(filteredData) // 클릭할때마다 탭 모드에 해당하는 data를 불러온다.
          })
     }
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
                    newDiv.innerHTML = data[i].title;
                    girdContainer.append(newDiv);
               }
     }

     const init = () => {
          filteredData = getContents(dummyData) // 맨처음은 추천 항목을 보여준다.
          getMode(tabItems) // 클릭이벤트 감지
          createElement(filteredData) // 추천 탭 데이터 가져오기
     } // 최초실행 함수

     init();
}())