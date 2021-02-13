// // alert dialog
// alertify.alert("Message");
//
// // confirm dialog
// alertify.confirm("Message", function (e) {
//     if (e) {
//         // user clicked "ok"
//     } else {
//         // user clicked "cancel"
//     }
// });
//
// // prompt dialog
// alertify.prompt("Message", function (e, str) {
//     // str is the input text
//     if (e) {
//         // user clicked "ok"
//     } else {
//         // user clicked "cancel"
//     }
// }, "Default Value");
// Alert Dialog
// alert dialog

const myChart = $("#example").donutty({

    // options here

});
// or
const myChart = $("#example").donutty({
    min: -100,
    max: 100,
    value: 50
});
const myChart = $("#example").donutty({

    // min/max values
    min: 0,
    max: 100,

    // current value
    value: 50,

    // rounded edges or not
    round: true,

    // complete circle or not
    circle: true,

    // padding in pixels
    padding: 4,

    // radius in pixels
    radius: 50,

    // thickness in pixels
    thickness: 10,

    // background color
    bg: "rgba(70, 130, 180, 0.15)",

    // bar color
    color: "mediumslateblue",

    // transition effect
    transition: "all 1.2s cubic-bezier(0.57, 0.13, 0.18, 0.98)"

});
const myChart = $("#example").donutty({

    text: function( state ) {
        return ( state.value / ( state.max - state.min ) * 100 ) + "%";
        // return the percentage of the donut
    }

});
// min, max, value
myChart.set( "value", 60 )

// min, max, value, bg, color, etc
myChart.setState({
    options here
})


alertify.alert("Message");
// confirm dialog
alertify.confirm("Message", function (e) {
    if (e) {
        // user clicked "ok"
    } else {
        // user clicked "cancel"
    }
});
$(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
});
/**
 * This was built using the scrollie jQuery Plugin
 * https://github.com/Funsella/jquery-scrollie
 */


$( window ).ready(function() {

    var wHeight = $(window).height();

    $('.slide')
        .height(wHeight)
        .scrollie({
            scrollOffset : -50,
            scrollingInView : function(elem) {

                var bgColor = elem.data('background');

                $('body').css('background-color', bgColor);

            }
        });

});
var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function(){

        value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function(){
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();


