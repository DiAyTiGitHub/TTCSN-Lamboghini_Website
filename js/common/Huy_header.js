function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

const activeMenuHeader = (itemLeftNav, menuElement, headerMenu) => {
    if (headerMenu.classList.contains('active')) {
        if (itemLeftNav.className != document.querySelector('.header-menu .header-menu-item.active').id) {
            document.querySelector('.header-menu .header-menu-item.active').classList.remove('active');
            if (itemLeftNav.innerText === 'MODELS') {
                menuElement.classList.add('active')
                headerMenu.classList.add('active')
                headerMenu.style.height = '224px'
            }
        }
    } else {
        if (itemLeftNav.innerText === 'MODELS') {
            menuElement.classList.add('active')
            headerMenu.classList.add('active')
            headerMenu.style.height = '224px'
        }
    }
}

const activeMenuSubHeader = (itemMenu, headerMenuSub) => {
    if (document.querySelector('.header-menu-item .header-menu-item__list a.active')) {
        if (document.querySelector('.header-menu-item .header-menu-item__list a.active') != itemMenu) {
            document.querySelector('.header-menu-item .header-menu-item__list a.active').classList.remove('active');
            itemMenu.classList.add('active')
        }
    } else {
        itemMenu.classList.add('active')
    }

    if (document.querySelector('.menu-sub-item.active')) {
        if (document.querySelector('.menu-sub-item.active') === headerMenuSub) {
            headerMenuSub.classList.add('active')

        } else {
            document.querySelector('.menu-sub-item.active').classList.remove('active')
            headerMenuSub.classList.add('active')

        }
    } else {
        headerMenuSub.classList.add('active')
    }

    const headerMenuSubItems = headerMenuSub.querySelectorAll('a');
    headerMenuSubItems.forEach(itemSubSelect => {
        itemSubSelect.style.color = 'white';
        itemSubSelect.onmouseover = e => {
            e.stopPropagation()
            headerMenuSubItems.forEach(itemSub => {
                if (itemSubSelect != itemSub) {
                    itemSub.style.color = 'rgb(111, 111, 111)';
                    itemSubSelect.style.color = 'white';
                }
            })
        }

    })
}

const outHeader = (headerElement) => {
    headerElement.querySelector('.header-menu').classList.remove('active');
    headerElement.querySelector('.header-menu').style.height = '0px'
    document.querySelector('#header .header-menu .active')?.classList?.remove('active');
}

const activeIconHeader = (iconHeader, maskHeader) => {
    const idIcon = document.getElementById(iconHeader.classList[0]);
    const exitIcon = idIcon.querySelector('.exit-icon-header');
    idIcon.classList.add('active');
    maskHeader.classList.add('active');

    if (idIcon.querySelector('.bars-overplay-exit')) {
        idIcon.querySelector('.bars-overplay-exit').classList.add('active');
    }
    exitIcon.onclick = e => {
        e.stopPropagation()
        maskHeader.classList.remove('active');
        idIcon.classList.remove('active');
        if (idIcon.querySelector('.bars-overplay-exit.active')) {
            idIcon.querySelector('.bars-overplay-exit').classList.remove('active');
        }
    }
}

//Mobile Menu
const activeMenuMobile = (menuItemMain, navListMobile) => {
    const menuBackIcon = menuItemMain.querySelector('.menu-sdevice-back');

    menuItemMain.classList.add('active');
    menuItemMain.querySelector('.header-menu-sdevice-item__list').classList.add('active');
    navListMobile.classList.remove('active');

    menuBackIcon.onclick = e => {
        e.stopPropagation()
        menuItemMain.classList.remove('active');
        menuItemMain.querySelector('.header-menu-sdevice-item__list').classList.remove('active');
        navListMobile.classList.add('active');
    }
}

const activeMenuSubMobile = (idMenuSub) => {
    if (document.querySelector('.menu-sub-sdevice-item.active')) {
        if (document.querySelector('.menu-sub-sdevice-item.active') == idMenuSub) {
            idMenuSub.style.height = '0';
            idMenuSub.classList.remove('active');
        } else {
            document.querySelector('.menu-sub-sdevice-item.active').style.height = '0';
            document.querySelector('.menu-sub-sdevice-item.active').classList.remove('active');
            if ((idMenuSub.id == 'mhuracan')) {
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '275px';
            }

            if ((idMenuSub.id == 'murus')) {
                idMenuSub.classList.add('active');
                idMenuSub.style.height = '180px';
            }
        }
    } else {
        if ((idMenuSub.id == 'mhuracan')) {
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '275px';
        }
        else if ((idMenuSub.id == 'murus')) {
            idMenuSub.classList.add('active');
            idMenuSub.style.height = '180px';
        }
    }
}
const header = () => {
    const itemsLeftNav = document.querySelectorAll('.header-nav-left__item a');
    const headerElement = document.getElementById('header')
    const headerRightElement = document.querySelector('#header .header-nav-right')
    const iconListHeader = document.querySelectorAll('.header-nav-right__icon-box i')
    const maskHeader = document.querySelector('.maskHeader');

    //Mobile
    const itemsMainNav = document.querySelectorAll('.nav-item-box');

    // Header item
    headerElement.addEventListener('mouseover', e => {
        e.stopPropagation();
        itemsLeftNav.forEach(itemLeftNav => {
            itemLeftNav.onmouseover = e => {
                e.stopPropagation();

                if (document.querySelector('.menu-sub .menu-sub-item.active')) {
                    document.querySelector('.menu-sub .menu-sub-item.active').classList.remove('active')
                    document.querySelector('.header-menu-item .header-menu-item__list a.active').classList.remove('active');
                }
                const menuElement = document.getElementById(itemLeftNav.className);
                const headerMenu = getParent(menuElement, '.header-menu')
                activeMenuHeader(itemLeftNav, menuElement, headerMenu);
                const headerMenuItems = menuElement.querySelectorAll('.header-menu-item__list li a')
                headerMenuItems.forEach(itemMenu => {
                    itemMenu.onmouseover = e => {
                        e.stopPropagation()
                        const headerMenuSub = document.getElementById(itemMenu.classList[0])
                        activeMenuSubHeader(itemMenu, headerMenuSub);
                    }
                })

            }
        });
    })

    headerElement.addEventListener('mouseleave', e => {
        outHeader(headerElement)
    })

    headerRightElement.addEventListener('mouseover', e => {
        headerElement.querySelector('.header-menu').classList.remove('active');
        headerElement.querySelector('.header-menu').style.height = '0px';
        document.querySelector('#header .header-menu .active')?.classList?.remove('active');
    })

    iconListHeader.forEach(iconHeader => {
        iconHeader.onclick = e => {
            e.stopPropagation();
            console.log('catched')
            activeIconHeader(iconHeader, maskHeader)
        }
    })

    //Mobile Menu
    itemsMainNav.forEach(itemMain => {
        itemMain.onclick = e => {
            e.stopPropagation();

            const classItemMain = itemMain.querySelector('span').classList[0];
            const menuItemMain = document.getElementById(classItemMain);
            const navListMobile = getParent(itemMain, '.nav-list');
            const menuItemMainList = menuItemMain.querySelectorAll('.header-menu-item .menu-sdevice-box');

            activeMenuMobile(menuItemMain, navListMobile);

            menuItemMainList.forEach(menuItem => {
                const classMenuMobile = menuItem.querySelector('a');
                classMenuMobile.onclick = e => {
                    e.preventDefault();
                }

                menuItem.onclick = e => {
                    const idMenuSub = document.getElementById(classMenuMobile.classList[0]);
                    activeMenuSubMobile(idMenuSub);
                }
            })
        }
    })



}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.display = "block";
    } else {
        document.getElementById('header').style.display = "none";
    }
    prevScrollpos = currentScrollPos;
}

header();