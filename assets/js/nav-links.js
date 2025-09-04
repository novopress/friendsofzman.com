/* Check if current URL matches any links on the page */
/* If so, disable href element so it's unclickable and add a class */
/* Helps give visual indication of which page is loaded */

document.addEventListener("DOMContentLoaded", () => {
  const current = window.location.pathname.replace(/\/$/, ""); // normalize
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href").replace(/\/$/, "");
    if (href === current) {
      link.id = "current";
      link.removeAttribute("href"); // makes it unclickable
    }
  });
});
