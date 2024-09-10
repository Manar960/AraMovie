const navOpenBtn = document.querySelector(
  "[data-menu-open-btn]"
) as HTMLElement | null;
const navCloseBtn = document.querySelector(
  "[data-menu-close-btn]"
) as HTMLElement | null;
const navbar = document.querySelector("[data-navbar]") as HTMLElement | null;
const overlay = document.querySelector("[data-overlay]") as HTMLElement | null;

const navElemArr: (HTMLElement | null)[] = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  const element = navElemArr[i];
  if (element) {
    element.addEventListener("click", () => {
      if (navbar && overlay) {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
      }
    });
  }
}

const header = document.querySelector("[data-header]") as HTMLElement | null;

window.addEventListener("scroll", () => {
  if (header) {
    if (window.scrollY >= 10) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
});

/**
 * Go top button
 */

// Cast `goTopBtn` to `HTMLElement | null`
const goTopBtn = document.querySelector("[data-go-top]") as HTMLElement | null;

window.addEventListener("scroll", () => {
  if (goTopBtn) {
    if (window.scrollY >= 500) {
      goTopBtn.classList.add("active");
    } else {
      goTopBtn.classList.remove("active");
    }
  }
});
