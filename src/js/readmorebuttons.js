const readmoreButton = document.querySelector('.readmore-button');
const readmoreImg = document.querySelector('.button__img');
const readmoreTxt = document.querySelector('.button__text');

const sliderReadmore = document.querySelector('.readmore-two');
const sliderTwoOpen = document.querySelector('.repairs');
const readmoreTxtTwo = document.querySelector('.button__texttwo');
const readmoreImgTwo = document.querySelector('.button__imgtwo');

const textButton = document.querySelector('.text__button');
const postHidden = document.querySelector('.content__posthidden');

const textOne = document.querySelector('.readmore__textone');
const textImage = document.querySelector('.readmore__image');

readmoreButton.addEventListener('click', () => {
  cards.classList.toggle('brands--visible');

  if (readmoreTxt.textContent === 'Показать все') {
      readmoreTxt.textContent = 'Скрыть'
  } else {
      readmoreTxt.textContent = 'Показать все'
  }
  readmoreImg.classList.toggle('button__img--activated');
})

sliderReadmore.addEventListener('click', () => {
  sliderTwoOpen.classList.toggle('repairs-open');
  if (readmoreTxtTwo.textContent === 'Показать все') {
    readmoreTxtTwo.textContent = 'Скрыть'
} else {
    readmoreTxtTwo.textContent = 'Показать все'
}
readmoreImgTwo.classList.toggle('button__imgtwo--activated');
})
textButton.addEventListener('click', () => {
  postHidden.classList.toggle('hidden__open');
  if (textOne.textContent === 'Читать далее') {
    textOne.textContent = 'Скрыть'
} else {
  textOne.textContent = 'Читать далее'
}
textImage.classList.toggle('readmore__image--activated');
})
