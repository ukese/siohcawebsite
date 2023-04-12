import {VscMenu, VscClose} from 'react-icons/vsc';

export function toggleMenu() {
    var menuIcon = document.getElementsByClassName('vscmenu')[0];
    var closeIcon = document.getElementsByClassName('vscclose')[0];
    var menu = document.getElementsByClassName('siohca-navbar-menu')[0];
    if (menuIcon.style.display == 'none') {
        console.log('menuIcon is VscMenu');
        menu.style.visibility = 'hidden';
        menu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        
    } else {
        menu.style.visibility = 'visible';
        menu.style.display = 'block';
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
