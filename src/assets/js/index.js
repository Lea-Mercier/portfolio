
$(document).ready(function () {
   const $roles = $('.roles-wrapper h2');

   // there is allais one role  not hidden, every 5 seconds we hide it and show the next one
    setInterval(function () {
        let $active = $('.roles-wrapper h2:not([hidden])');
        $active.prop('hidden', true);
        console.log($active)
        if ($active.next().length) {
            $active.next().prop('hidden', false);
        } else {
            $roles.first().prop('hidden', false);
        }
    }, 3000);
});