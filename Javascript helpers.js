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

/**
 * Returns true if the app is executing as a cordova or phonegap application.
 * @returns {Boolean}
 */
function isApp(){
	//return true; //DEBUG
	var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
	if (app) {
		//phonegap
	    return true;
	} else {
		return false;
	    // Web page
	}	
}

/*
where a 6-digit zerofilled representation of the number 5 would be "000005"
*/
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}


