'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/**
 * * Sử dụng dữ liệu được cung cấp ở trên
 * TODO 1) Khi tối nhấn vào 1 trong 3 nút sẽ hiển thị Khôi "modal"
 * TODO 2) Khi tôi nhấn vào biểu tượng "x" =>> khối "modal" bị ẩn đi
 * TODO 3) Khi tôi nhấn vào lớp phủ overlay =>> khối "modal" bị ẩn đi
 */

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// TODO 1)
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

// TODO 2)
btnCloseModal.addEventListener('click', closeModal);

// TODO 3)
overlay.addEventListener('click', closeModal);


