
/* burger__menu */

const Body = document.querySelector('body')
const burgerMenuButton = document.querySelector('#hamb')
const burgerMenuCloseButton = document.querySelector('.popup__close__field')
const headerPopup = document.querySelector('#popup')

burgerMenuButton.addEventListener('click', clickedHeaderButton)

function clickedHeaderButton(e) {
    headerPopup.classList.add('opened')
    Body.classList.add('body__no__scroll')
    burgerMenuButton.classList.add('invisible')
    burgerMenuCloseButton.classList.add('active')
    closePopupFunction()
}
function closePopupFunction() {
    headerPopup.addEventListener('click', function(e){
        if (e.target.closest('.popup__close')) {
            headerPopup.classList.remove('opened')
            Body.classList.remove('body__no__scroll')
            burgerMenuButton.classList.remove('invisible')
            burgerMenuCloseButton.classList.remove('active')
        }
    })
}

/* swiper */

const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },
    spaceBetween: 100,

    slidesPerView: 1,

    breakpoints: {

        630: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        860: {
            slidesPerView: 2.3,
        },

        1030: {
            slidesPerView: 3,
            spaceBetween: 20
        },
     
        
        
        
      }

  });



console.log('dfsfsd');









































