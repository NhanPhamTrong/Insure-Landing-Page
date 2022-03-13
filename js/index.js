const menu = $("#menu");
const menuToggler = $(".menu-toggler");

function OpenMenu() {
    menuToggler.toggleClass("active");
    menu.toggleClass("open");
}

function ChangeScreenWidth() {
    if ($(window).width() <= 974) {
        $("#heading img").attr("src", "./images/image-intro-mobile.jpg");
    }
    else {
        $("#heading img").attr("src", "./images/image-intro-desktop.jpg");
    }
}
  
ChangeScreenWidth();
$(window).resize(ChangeScreenWidth);