
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


    const navbar = document.getElementsByClassName("navbar");
    const $navbar = $(navbar);
    const sticky = navbar.offsetTop;

    document.addEventListener('scroll', function (event) {
        const scroll = $(document).scrollTop();
        myFunction($navbar, sticky, scroll);
    }, true);
});

function myFunction($navbar, sticky, scroll) {
    if (scroll>= sticky) {
        $navbar.addClass("sticky")
        console.log('sticky')
    } else {
        $navbar.removeClass("sticky")
        console.log('pas sticky')
    }
    console.log(scroll, sticky)
}