/**
 * Scroll to the element with the specified selector
 * @param {String} element //for example "#idSelector"
 * @returns {void}
 */
function scrollToElement(selector){
    var offTop = $(selector).offset().top-200;
    $('html, body').animate({
        scrollTop: offTop
    }, 2000);
}
