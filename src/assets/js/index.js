
$(document).ready(function () {
   const $roles = $('.roles-wrapper h2');

   // there is allais one role  not hidden, every 5 seconds we hide it and show the next one
    setInterval(function () {
        let $active = $('.roles-wrapper h2:not([hidden])');
        $active.prop('hidden', true);
        if ($active.next().length) {
            $active.next().prop('hidden', false);
        } else {
            $roles.first().prop('hidden', false);
        }
    }, 3000);


    var navbar = document.getElementsByClassName("navbar");
    var $navbar = $(navbar);
    var sticky = navbar.offsetTop;

    window.onscroll = function() {myFunction($navbar, sticky)};
});

function myFunction($navbar, sticky) {
    if (window.pageYOffset >= sticky) {
        $navbar.addClass("sticky")
        console.log('sticky')
    } else {
        $navbar.removeClasse("sticky")
        console.log('pas sticky')
    }
}