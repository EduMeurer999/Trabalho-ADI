$(document).ready(function() {
    $("button").click(function() {
        $("nav-item h5").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
    $(".nav-item").click((ev) => {
        $(".nav-item").removeClass("active");
        ev.currentTarget.className += " active";
        let id = ev.currentTarget.id.split("-")[1];
        $(`div.container`).css({display: "none"});
        $(`div#${id}`).css({display: "block"});

    });
    $("button").click(()=>{
        let element = $("iframe");
        element.css({display: "block"});
    })

});


