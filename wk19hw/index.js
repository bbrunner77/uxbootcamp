// $('.sierra_txt').hover(function(){
//     $(this).css("background-color","#0084BB");
// });

// $('#sierra_txt').on("click", function(){
//     $(this).css("background-color","red");
// });

function sierra_in(){
    $('.sierra').css('background-color',"#0084BB");
    $('.sierra_logo').css('background-image',"url(images/sierra_hover.png)");
};

function sierra_out(){
    $('.sierra').css('background-color',"#475458");
    $('.sierra_logo').css('background-image',"url(images/sierra.png)");
};

$('.sierra_txt').hover(sierra_in,sierra_out);

function ozark_in(){
    $('.ozark').css('background-color',"#98C149");
    $('.ozark_logo').css('background-image',"url(images/ozarks_hover.png)");
};

function ozark_out(){
    $('.ozark').css('background-color',"#475458");
    $('.ozark_logo').css('background-image',"url(images/ozarks.png)");
};

$('.ozark_txt').hover(ozark_in,ozark_out);