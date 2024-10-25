let handleClick = () => {
  document.getElementById("navDialog").classList.toggle("hidden");
};
const initialTranslateLTR = -36 * 4; // Initial translation value for left-to-right movement
const initialTranslateRTL = 12 * 4; // Initial translation value for right-to-left movement

function setupIntersectionObserver(element, isLTR, speed) {
  // Callback for the IntersectionObserver
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;

    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  // Create the IntersectionObserver and observe the element
  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  // Scroll handler function
  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

let line1 = document.getElementById("line-1");
let line2 = document.getElementById("line-2");

setupIntersectionObserver(line1, false, 0.15);
setupIntersectionObserver(line2, true, 0.15);
