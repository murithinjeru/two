(function (global) {

"use strict";

var alert;  //  added this in to fix

function initialize_page()
  {
  global.alert ("hi");
  }

addEventListener('load', initialize_page);

})(document);
