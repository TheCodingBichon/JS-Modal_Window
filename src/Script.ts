'use strict';

// praca z klasami CSS

/* const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelector('.show-modal'); // w przypadku zastosowania querySelector wybierze on pierwsze i tylko pierwsze .show-modal jakie napotka w dokumencie */
/* const btnsOpenModalAll = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
console.log(btnsOpenModalAll); */

/* for (let i = 0; i < btnsOpenModalAll.length; i++) {
  btnsOpenModalAll[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden'); //.remove - usuwa daną klasę
    overlay.classList.remove('hidden');
  });
} */

/* btnCloseodal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}); */

// Usunięcie powtórzenia w kodzie:

const btnsOpenModalAll = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModalAll.length; i++) {
  btnsOpenModalAll[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//obsługa klawiszy - ESC - zamknięcie okna

/* document.addEventListener('keydown', function () {
  console.log('key was pressed');
}); //stosujemy listener dla całego dokumentu - w tej konfiguracji będzie to dotyczyło każdego wciśniętego klawisza na klawiaturze */

document.addEventListener('keydown', function (e) {
  console.log(e.key); //e.key wybierze z listy klawiszy pozycję "key" (klawisz, który wciskamy)

  if (e.key === 'Escape') console.log('Esc was pressed');
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden'))
      // jeżeli modal NIE zawiera hidden (! - negacja)
      closeModal();
  }
});
