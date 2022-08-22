const burgerButton = document.querySelector('.upperMenu__burger');
const asideMenu = document.querySelector('.menu__content');
const bodyBlur = document.querySelector('.main-section');
const closeBtn = document.querySelectorAll('.close__btn');

const callBtn = document.querySelectorAll('.call__btn');
const callMenu = document.querySelector('.container__modal-callback');

const chatBtn = document.querySelectorAll('.chat__btn');
const chatMenu = document.querySelector('.popup__body');

const menu = document.querySelector('.menu');
const popupCallback = document.querySelector('.popup-callback');
const popupCallbackBody = popupCallback.querySelector('.popup__body');

const popupChatback = document.querySelector('.popup-chatback');
const popupChatbackBody = popupChatback.querySelector('.popup__body');


burgerButton.addEventListener('click', () => {
  asideMenu.classList.toggle('menu-open');
  bodyBlur.classList.toggle('section-blur');
  document.body.style.overflow = 'hidden';
  menu.classList.toggle('menu__active');
})


for (let i = 0; i < chatBtn.length; i++) {
  chatBtn[i].addEventListener('click', () => {
    bodyBlur.classList.add('section-blur');
    asideMenu.classList.remove('menu-open');
    document.body.style.overflow = 'hidden';
    popupChatback.classList.toggle('popup__active')
    popupChatbackBody.classList.toggle('popup__body--active')
})
}

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener('click', () => {
    bodyBlur.classList.add('section-blur');
    asideMenu.classList.remove('menu-open');
    document.body.style.overflow = 'hidden';
    popupCallback.classList.toggle('popup__active')
    popupCallbackBody.classList.toggle('popup__body--active')
})
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', () => {
    asideMenu.classList.remove('menu-open');
    bodyBlur.classList.remove('section-blur');
    document.body.style.overflow = 'auto';
    menu.classList.remove('menu__active');
    for (let i = 0; i < popups.length; i++) {
      const popup = popups[i];
    popup.classList.remove('popup__active');
    if (popupCallbackBody) {
      popupCallbackBody.classList.remove('popup__body--active');
    }
    if (popupChatbackBody) {
      popupChatbackBody.classList.remove('popup__body--active');
    }
    }
  })
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    asideMenu.classList.remove('menu-open');
    menu.classList.remove('menu__active');
    bodyBlur.classList.remove('section-blur');
    popupCallback.classList.remove('popup__active');
    popupChatback.classList.remove('popup__active');
    popupCallbackBody.classList.remove('popup__body--active');
    popupChatbackBody.classList.remove('popup__body--active');
    document.body.style.overflow = 'auto';
  hideModal()
  }
  });


  const popups = document.querySelectorAll('.popup');

  menu.addEventListener('click', function (e) {
    if (!e.target.closest('.menu__content')) {
    bodyBlur.classList.remove('section-blur');
    asideMenu.classList.remove('menu-open');
    document.body.style.overflow = 'auto';
    menu.classList.remove('menu__active');
  }
}
  )



    for (let i = 0; i < popups.length; i++) {
      const popup = popups[i];
      popup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__body')) {
        bodyBlur.classList.remove('section-blur');
        document.body.style.overflow = 'auto';
        menu.classList.remove('menu__active');
        popup.classList.remove('popup__active');
        if (popupCallbackBody) {
          popupCallbackBody.classList.remove('popup__body--active');
        }
        if (popupChatbackBody) {
          popupChatbackBody.classList.remove('popup__body--active');
        }
        }
})
}
