// поиск
let searchButton = document.querySelector('.header__search-button');

if(searchButton){
   searchButton.addEventListener('click', function(e){
      searchButton.nextElementSibling.classList.toggle('open');
   });
}

// burger-menu

let burger = document.querySelector('.header__menu-burger');
let menu = document.querySelector('.header__menu-items');
let body = document.body;
burger.addEventListener('click', function(e){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});
window.addEventListener(`resize`, function(e){
   if (window.innerWidth>768){
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
   }
   });

//footer menu

//let screenWidth = document.documentElement.clientWidth;
let titles = document.querySelectorAll('.footer-menu__item-title');
let sections = [];
for (i=0; i<titles.length; ++i){
   sections[i]=titles[i].nextElementSibling;
}
console.log(sections);

titles.forEach(function(item){
   let title = item;
   title.addEventListener("click", function(e){
      if(title.classList.contains('open')){
         title.classList.remove('open');
         title.nextElementSibling.classList.remove('open');
      }else{titles.forEach((item)=>{item.classList.remove('open')});
         title.classList.add('open');
      sections.forEach((item)=>{item.classList.remove('open')});
      title.nextElementSibling.classList.add('open');}
})
})