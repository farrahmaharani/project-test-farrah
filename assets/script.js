let thisPage = 1;
let lim = 8;
let list = document.querySelector('.card');

function loadItem(){
    let beginGet = lim * (thisPage-1);
    let endGet = lim * thisPage - 1;
    list.forEach((card,key)=>{
        if(key >= beginGet && key <= endGet){
            card.style.display = 'block';
        }else{
            card.style.display = 'none';
        }
    })
    listPage();
}
loadItem();
function listPage(){
    let count = Math.ceil(list.length/lim);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage !=1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV'
        prev.setAttribute('onclick', "changePage(" + (thisPage-1)  + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    for(i = 1;i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('activelink');
        }
        newPage.setAttribute('onClick',"changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
    if(thisPage!= count){
        let next = document.createElement('li');
        next.innerText = 'NEXT';
        prev.setAttribute('onclick', "changePage(" + (thisPage-1)  + ")");
        document.querySelector('.listPage').appendChild(prev);
    }
}
function changePage(i){
    thisPage = i;
    loadItem();
}

// navbar

var lastscrollTop = 0;
navbar = document.getElementById("header");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastscrollTop){
        navbar.styleTop = "-80px";
    }else{
        navbar.styleTop = "0";
    }
    lastscrollTop = scrollTop;
})