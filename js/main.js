
function headerAnimation(name) {
  $(name).fadeOut(0);
  $(name).fadeIn(2000);


};

headerAnimation('#leftBlockTitle');
headerAnimation('#leftBlockSubtitle');
headerAnimation('#leftBlockText');



function bgColorChange(name, first, second) {
  name.addEventListener('mouseover', function(){
  name.style.backgroundColor = first;
  });
  name.addEventListener('mouseout', function(){
  name.style.backgroundColor = second;
  });
}


function colorChange(name, first, second) {
  name.addEventListener('mouseover', function(){
  name.style.color = first;
  });
  name.addEventListener('mouseout', function(){
  name.style.color = second;
  });
}



function header() {

  

  let headerItem = document.querySelectorAll('.header-item');
  let headerItemText = document.querySelectorAll('.header-item__text');
  let headerItemIcon = document.querySelectorAll('.header-item__icon');

  for(let i = 0; i < headerItem.length; i++) {
    bgColorChange(headerItem[i],'#414157', '#15154e');
  };

  for(let i = 0; i < headerItemText.length && headerItemIcon.length; i++) {
    colorChange(headerItemText[i], '#a9a9af', '#fff');
    colorChange(headerItemIcon[i], '#fff', '#a9a9af');
  }




  let rightFormButton = document.querySelector('.sing-content__right-block__form-button');
  bgColorChange(rightFormButton, '#44d834', '#4cb341');
  
  $(window).on("scroll", function () {
    let scrolled = $(this).scrollTop();
    let headerItem = document.querySelectorAll('.header-item');

  
  
  
    function colorChangeNavText() {
      let headerItemText = document.querySelectorAll('.header-item__text');
      let headerItemIcon = document.querySelectorAll('.header-item__icon');
  

      for(let i = 0; i < headerItemText.length && headerItemIcon.length; i++) {
        headerItemText[i].addEventListener('mouseover', function(){
          headerItemText[i].style.color = '#a9a9af';
          headerItemIcon[i].style.fill = '#fff';
        });
        headerItemText[i].addEventListener('mouseout', function(){
          headerItemText[i].style.color = '#fff';
          headerItemIcon[i].style.fill = '#a9a9af';
        });
      }
      }

      
  
  
  
    for(let i = 0; i < headerItemText.length && headerItemIcon.length; i++) {
      colorChangeNavText();
    }
  
  
  // 107
  
    if( scrolled > 0 ) {
        $('.content').addClass('header-continer__active');
        for(let i = 0; i < headerItem.length; i++) {
          headerItem[i].style.backgroundColor = '#5a5adf';
          bgColorChange(headerItem[i],'#414157', '#5a5adf');
        };
        let headeButton = document.querySelector('.header__button');
        headeButton.style.opacity = 1;
        bgColorChange(headeButton, '#44d834', '#4cb341');
    }   

    if( scrolled <= 0 ) {     
        $('.content').removeClass('header-continer__active');
  
        for(let i = 0; i < headerItem.length; i++) {
            headerItem[i].style.backgroundColor = '#15154e';
            bgColorChange(headerItem[i],'#414157', '#15154e');
          };
          let headeButton = document.querySelector('.header__button');
          headeButton.style.opacity = 0;
    }
  
  
  });




}
header();








function aboutAnim() {
let aboutSubtitle = document.querySelector('.about-subtitle');

window.addEventListener('scroll', function(){
  setTimeout(function() { 
          aboutSubtitle.style.opacity = 1;
        }, 200);
  setTimeout(function() { 
          aboutSubtitle.style.margin = '100px 0px 20px 0';
        }, 201);  
        


});

};

aboutAnim();





  function awits() {

  // setInterval(function(){

  let awitsContent  = ['Раз в месяц с 15 числа', 'Как часто проводится курс?', 'Предоставляется тренировочная база', 'Будет ли предоставлена учебная платформа?', 'В офлайн формате.', 'В каком формате проводится курс?'];
  let contentAnswer = document.querySelector('.awits-content__answer');
  let contentQuestion = document.querySelector('.awits-content__question');


function textAwits(massName, nameLet) {
  for(let i = 0; i < massName.length; i++){
    setTimeout(function() { 
      nameLet.innerHTML = nameLet.innerHTML + massName[i];
      }, 100 * (i + 1));
  }
}
  



  setTimeout(function(){
    contentQuestion.style.opacity = 1; 
    let questionFirst = awitsContent[1].split('');
    textAwits(questionFirst, contentQuestion);
    
  },1000);


  setTimeout(function(){
    contentAnswer.style.opacity = 1;
    let answerFirst = awitsContent[0].split('');
    textAwits(answerFirst, contentAnswer);
    contentAnswer.innerHTML = '';
  }, 3900);

  setTimeout(function(){
    contentQuestion.style.opacity = 0;
    contentAnswer.style.opacity = 0;
    contentQuestion.style.opacity = 1;
    contentQuestion.innerHTML = '';
    let questionSecond = awitsContent[3].split('');
    textAwits(questionSecond, contentQuestion);
    
  },7000);


  setTimeout(function(){
    contentAnswer.style.opacity = 1;
    let answerSecond = awitsContent[2].split('');
    textAwits(answerSecond, contentAnswer);
    contentAnswer.innerHTML = '';
  }, 12000);

  setTimeout(function(){
    contentQuestion.style.opacity = 0;
    contentAnswer.style.opacity = 0;
    contentQuestion.style.opacity = 1;
    contentQuestion.innerHTML = '';
    let questionThird = awitsContent[5].split('');
    textAwits(questionThird, contentQuestion);
    
  },17000);

  setTimeout(function(){
    contentAnswer.style.opacity = 1;
    let answerThird = awitsContent[4].split('');
    textAwits(answerThird, contentAnswer);
    contentAnswer.innerHTML = '';
  }, 22000);


}


// }, 5500);


$(window).one("scroll", function () {
  awits();
});





















function program() {

let programListItem = document.querySelectorAll('.program__list-item');
let programListItemIcon = document.querySelectorAll('.program__list-item__icon');




for(let i = 0; i < programListItem.length && programListItemIcon.length; i++) {
  programListItem[i].addEventListener('mouseenter',function(){

    // if (e.target != this) { return true; }
    programListItemIcon[i].style.fill = '#6439b7';

    setTimeout(() => {
      programListItemIcon[i].style.marginTop = '-7%'; 

      setTimeout(() => {
        programListItemIcon[i].style.marginTop = '-9%';
      }, 100);
    }, 100);
    setTimeout(() => {
      programListItemIcon[i].style.marginTop = '-7%'; 

      setTimeout(() => {
        programListItemIcon[i].style.marginTop = '-9%';
      }, 100);
    }, 300); 
    
    
  });
  programListItem[i].addEventListener('mouseleave',function(){

    // if (d.target != this) { return true; }

    programListItemIcon[i].style.fill = '#e94e1b';
    programListItemIcon[i].style.marginTop = '-9%';
  });
}


}


program();



function prise() {
  let priseButton = document.querySelector('.prise__content-continer__button');
  bgColorChange(priseButton, '#44d834', '#4cb341');
}

prise();



function footer() {

  let footerIcon = document.querySelectorAll(".footer__list-item__icon");
  
  for(let i = 0; i < footerIcon.length; i++) {
    footerIcon[i].addEventListener('mouseover', function(){
      footerIcon[i].style.fill = '#fff';
    });
    footerIcon[i].addEventListener('mouseout', function(){
      footerIcon[i].style.fill = '#a9a9af';
    });
  } 

  let footerInfoIcon = document.querySelector('.footer-info__icon');
  let footerInfoText = document.querySelector('.footer-info__text');

  footerInfoText.addEventListener('mouseover', function() {

    footerInfoText.style.color = '#fff';
    
    footerInfoIcon.style.fill = '#fff';
  });
  footerInfoText.addEventListener('mouseout', function(){
    footerInfoText.style.color = '#a9a9af';

    footerInfoIcon.style.fill = '#a9a9af';
  });

}

footer();



isMobile = {//Проверяем с какого устройства мы зашли
  Android: function() {
  return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
  return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
  return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
  return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
  };
  if (isMobile.any()) {//Если действительно с мобильно устройства то запускаем нашу функцию
  itismobile();
  }
  function itismobile(){
  $('video').attr('controls','controls');//Добавляем к тегу видел контролы
  $('video').get(0).play();//Автозапуск
  }
  





// let emersion = function(letName, tegName, lenght) {
//   letName = document.querySelectorAll(tegName);
//   for (let i = 0; i <= lenght; i++) {
//     setTimeout(function() { 
//       letName[i].style.opacity = 1; 
//     }, 200 * (i + 1));
//   }
// };
  

//   emersion(startingPriceItem, '.starting-price__item', 5);




//   let uprise = function(letName, tegName, lenght) {
//     letName = document.querySelectorAll(tegName);
//     for (let i = 0; i <= lenght; i++) {
//       setTimeout(function() { 
//         letName[i].style.margin = '80px 0 0 0'; 
//       }, 201 * (i + 1));
//     }
//   }

//   uprise(startingPriceItem, '.starting-price__item', 5)


// opacity: 0;
//   transition: 1s;








// function program() {

//   let programListItem = document.querySelectorAll('.program__list-item');
//   let programListItemIcon = document.querySelector('.program__list-item__icon');
  
  
//   for(let i = 0; i < programListItem.length; i++) {
//     programListItem[i].addEventListener('mouseover',function(){
//       programListItemIcon.style.fill = '#6439b7';
  
//       setTimeout(() => {
//         programListItemIcon.style.marginTop = '455px'; 
  
//         setTimeout(() => {
//           programListItemIcon.style.marginTop = '444px';
//         }, 100);
//       }, 100);
//       setTimeout(() => {
//         programListItemIcon.style.marginTop = '455px'; 
  
//         setTimeout(() => {
//           programListItemIcon.style.marginTop = '444px';
//         }, 100);
//       }, 300); 
      
  
      
//     });
//     programListItem[i].addEventListener('mouseout',function(){
//       programListItemIcon.style.fill = '#e94e1b';
//       programListItemIcon.style.marginTop = '444px';
//     });
//   }
  
  
  
  
  
//   }
  
//   program();