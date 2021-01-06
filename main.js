let navOpen = document.querySelector('#openMobile img')
let mobNav = document.querySelector('.mobileNav')

let navIsOpen = false;

navOpen.addEventListener('click', showOrHideNav)

function showOrHideNav(){
    if(navIsOpen){
        this.src = '/ennoble-images/openMenu.png';
    mobNav.style.display = 'none';
    return navIsOpen = false;
    }
    this.src = '/ennoble-images/closeMenu.png';
    mobNav.style.display = 'block';
    return navIsOpen = true;
}

window.addEventListener('resize', closeMobile)

function closeMobile(){
    this.src = '/ennoble-images/openMenu.png'
        mobNav.style.display = 'none'
        return navIsOpen = false
}