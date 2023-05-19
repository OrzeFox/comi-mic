const menuIcon = document.querySelector('.hamb-btn');
const menuList = document.querySelector('.header-container');

menuList.style.display='none'

menuIcon.addEventListener('click', () => {
    if (menuList.style.display === 'none') {
        menuList.style.display = '';
    } else {
        menuList.style.display = 'none';
    }
});
