



$(".eyes").hide();
$(".mouth").hide();
$("#boo").hide();


function changeeyes(nbr_eye) {

    $( ".eyes" ).hide();

    $( ".nbr_eye"+nbr_eye).show();

    gsap.from(".nbr_eye"+nbr_eye, {
        duration: 4,
        opacity: 0,
        y: -500

    });
}function changemouth(nbr_mouth) {

    $( ".mouth" ).hide();

    $( ".nbr_mouth"+nbr_mouth).show();

    gsap.from(".nbr_mouth"+nbr_mouth, {
        duration: 3,
        opacity: 0,
        y: -500

    });
}

function showit() {
    $(".img1").show();
    $("#boo").show();

    gsap.to(".img1", {duration: 2, y: -500});
    gsap.from(".img1", {duration: 4 , opacity: 0});
    gsap.from("#boo", {duration: 2, y: -500});

}

function showeyes(){

    $( ".nbr_eye2").show();
    $(".button_show").hide();

}
function showmouth(){

    $( ".nbr_mouth0").show();

}

function move() {
    gsap.to("#emoji", {duration: 3, x: -10, rotation: 360});
    gsap.to("#boo", {duration: 3, x: -10, rotation: 360});
}



function leave()
{
    gsap.to("#emoji", {duration: 15, x: 4000, rotation: 360});
    gsap.to("#boo", {duration: 15, x: 4000, rotation: 360});


}