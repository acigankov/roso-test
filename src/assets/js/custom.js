if(window.innerWidth < 767) {
    let swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });
}
//selects
const select = document.getElementById('a-select');
if (select) { //чтобы работало только на нужных страницах, т.е. только там, где есть такой элемент
    NiceSelect.bind(select, {
        searchable: false,
    });
    select.style.display = 'none'; //это нужно после инициалиазаци, иначе криво рисуется статчный селект
}
//contols-mini

const toggler = document.getElementById('mini-toggler');
const togglerMenu = document.getElementById('togglerMenu');

//отслеживание клика по бургеру
toggler.addEventListener('click', function (event) {
    this.classList.toggle('open');

    if(this.classList.contains('open')) {
        togglerMenu.classList.add('open');
    } else {
        togglerMenu.classList.remove('open');
    }
});
