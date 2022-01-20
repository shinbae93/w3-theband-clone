const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const firstMenuItem = document.querySelector("#nav > li a");
const subnav = document.querySelector("#nav .subnav");
const currentHeight = header.clientHeight;
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const buyTicketsBtns = document.querySelectorAll(".js-buy-ticket");
const menuItems = document.querySelectorAll("#nav li a");

// Open/Close mobile menu
mobileMenu.onclick = function () {
    if (header.clientHeight === currentHeight) {
        header.style.height = "auto";
        header.style.overflow = "visible";
    } else {
        if (subnav.classList.contains("subnav-open"))
            subnav.classList.remove("subnav-open");
        header.style.height = null;
        header.style.overflow = "hidden";
        document.getElementById("nav-more-item").classList.remove("nav-hover");
    }
};

// Auto close menu on click link
menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        if (
            menuItem.nextElementSibling &&
            menuItem.nextElementSibling.classList.contains("subnav")
        ) {
            if (subnav.classList.contains("subnav-open")) {
                subnav.classList.remove("subnav-open");
                menuItem.classList.remove("nav-hover");
            } else {
                menuItem.classList.add("nav-hover");
                header.style.overflow = "visible";
                subnav.classList.add("subnav-open");
            }
            event.preventDefault();
        } else {
            if (subnav.classList.contains("subnav-open"))
                subnav.classList.remove("subnav-open");
            header.style.overflow = "hidden";
            header.style.height = null;
            document
                .getElementById("nav-more-item")
                .classList.remove("nav-hover");
        }
    };
});

// Click to show modal
buyTicketsBtns.forEach((buyBtn) => {
    buyBtn.addEventListener("click", function () {
        modal.classList.add("modal-open");
    });
});

// Click X button
modalClose.addEventListener("click", function () {
    modal.classList.remove("modal-open");
});

// Click outside modal container to close
modal.addEventListener("click", function (e) {
    if (!e.target.closest(".modal-container")) {
        modal.classList.remove("modal-open");
    }
});

// Click outsite sub-navigation to close
document.addEventListener("click", function (e) {
    if (!e.target.closest("#nav") && !e.target.closest("#mobile-menu")) {
        subnav.classList.remove("subnav-open");
        document.getElementById("nav-more-item").classList.remove("nav-hover");
        header.style.overflow = "hidden";
        header.style.height = null;
    }
});
