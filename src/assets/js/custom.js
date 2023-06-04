if(window.innerWidth < 767) {
    let swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });
}
//selects
const select = document.getElementById("a-select");
NiceSelect.bind(select, {searchable: false, placeholder: 'Выбрать', searchtext: 'zoek', selectedtext: 'geselecteerd'});
select.style.display = 'none'; //это нужно после инициалиазаци, иначе криво рисуется статчный селект