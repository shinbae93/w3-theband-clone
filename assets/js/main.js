const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const firstMenuItem = document.querySelector("#nav > li a");
const subnav = document.querySelector("#nav .subnav");
const currentHeight = header.clientHeight;
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const buyTicketsBtns = document.querySelectorAll(".js-buy-ticket");
var isDisplay = true;

// Open/Close mobile menu
mobileMenu.onclick = function () {
    if (header.clientHeight === currentHeight) {
        header.style.height = "auto";
        header.style.overflow = "visible";
    } else {
        header.style.height = null;
        header.style.overflow = "hidden";
    }
};

// Auto close menu on click link
const menuItems = document.querySelectorAll("#nav li a");

menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        if (
            menuItem.nextElementSibling &&
            menuItem.nextElementSibling.classList.contains("subnav")
        ) {
            if (!isDisplay) {
                subnav.style.display = "none";
            } else {
                subnav.style.display = "block";
            }
            isDisplay = !isDisplay;
            event.preventDefault();
        } else {
            header.style.overflow = "hidden";
            header.style.height = null;
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

// Click outside modal container
modal.addEventListener("click", function (e) {
    if (!e.target.closest(".modal-container")) {
        modal.classList.remove("modal-open");
    }
});
