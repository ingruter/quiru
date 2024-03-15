function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}

function eByClass(className) {
  return document.getElementsByClassName(className)[0];
}

addClass(eByClass('newNetworkName'), 'selected');
