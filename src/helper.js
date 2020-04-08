export  function onScrollIn() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
          document.getElementById("menu-site").style.backgroundColor = "white";
        }else{
          document.getElementById("menu-site").style.backgroundColor = "transparent";
        }
    });
}

export  function onScrollInMenu() {
    window.addEventListener('scroll', () => {
        const iconbar = document.getElementsByClassName('icon-bar');
        if (window.pageYOffset > 0) {
            document.getElementById("menu-site").style.backgroundColor = "#000";
            document.querySelector('.navbar-brand-menu').setAttribute('style', 'color: #ffd600 !important');
            for (let j = 0; j < iconbar.length; j++){
                iconbar[j].setAttribute('style', 'background-color: #ffd600 !important');
            }
        }else{
            document.getElementById("menu-site").style.backgroundColor = "transparent";
            document.querySelector('.navbar-brand-menu').removeAttribute('style');
            for (let j = 0; j < iconbar.length; j++) {
                iconbar[j].removeAttribute('style');
            }
        }
    });
}