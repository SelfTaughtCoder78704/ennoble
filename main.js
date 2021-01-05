let navOpen = document.getElementById('openMobile')
let mobNav = document.querySelector('.mobileNav')

let navIsOpen = false;

navOpen.addEventListener('click', showOrHideNav)

function showOrHideNav(){
    if(navIsOpen){
        this.textContent = "OPEN"
        mobNav.style.display = 'none'
        return navIsOpen = false
    }
   this.textContent = 'CLOSE'
   mobNav.style.display = 'block'
   return navIsOpen = true;
}

window.addEventListener('resize', closeMobile)

function closeMobile(){
    this.textContent = "OPEN"
        mobNav.style.display = 'none'
        return navIsOpen = false
}