$(document).ready(function() {
    $("button").click(function() {
        $("nav-item h5").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    })
    $("nav-item").click((ev) => {
        console.log(ev);
    })
});