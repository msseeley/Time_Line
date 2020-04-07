const items = document.querySelectorAll('#timeline li');

/*
Element.getBoundingClientRect()
  returns the size of an element and its position relative to the viewport

window.innerHeight
  Read-only, units px
  Gets the height of the content area of the browser window including, if rendered, the horizontal scrollbar.

window.innerWidth
  Read-only, units px
  Gets the width of the content area of the browser window including, if rendered, the vertical scrollbar.

document.documentElement
  returns the Element that is the root element of the document

    clientHeight
      Returns a Number representing the inner height of the element.

    clientWidth
      Returns a Number representing the inner width of the element.
*/

// checks if the element is in the viewport
const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
}

// runs through each item of the DOM and assigns annimation class "show" if item is in the viewport
const run = () => items.forEach(item => {
  if (isInViewport(item)) item.classList.add('show');
});

/*
conditions underwhich run will be triggered
  on page load, page resize, and page scroll
*/

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run)
