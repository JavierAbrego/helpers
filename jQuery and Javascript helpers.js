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

/**
 *  encode the selected string into UTF-8
 * @param {String} s
 * @returns {String}
 */
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}


/**
 * decode the selected string into UTF-8
 * @param {String} s
 * @returns {String}
 */
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
