let navBar = document.getElementById('navbar');
let menuBtn = document.getElementById('btn-menu');

navBar.style.right = "-250px";
menuBtn.onclick = function click() {
    if (navBar.style.right == "-250px") {
        navBar.style.right = "0px";
        navBar.style.boxShadow = "black -3px 5px 12px"
        navBar.style.transition = "0.5s"
    }
     else {
        navBar.style.right = "-250px";
    }
}

var scroll = new SmoothScroll('a[href*="#"]');