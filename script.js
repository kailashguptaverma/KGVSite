// Keep the copyright year current.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// The navigation stays visible if JavaScript is unavailable.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
const mobileScreen = window.matchMedia("(max-width: 640px)");

function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.hidden = mobileScreen.matches;
}

function updateNavigation() {
    if (!menuButton || !navigation) return;
    menuButton.hidden = !mobileScreen.matches;
    closeMenu();
}

menuButton?.addEventListener("click", () => {
    const isOpen = menuButton?.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.hidden = isOpen;
});

navigation?.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileScreen.matches) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        mobileScreen.matches &&
        menuButton?.getAttribute("aria-expanded") === "true"
    ) {
        closeMenu();
        menuButton.focus();
    }
});

// Homepage project spotlight.
// This only runs on pages containing the carousel.
const projectCarousel = document.querySelector(".project-carousel");

if (projectCarousel) {
    const projectCards = Array.from(
        projectCarousel.querySelectorAll(".project-card")
    );

    const previousButton = document.getElementById("previous-project");
    const nextButton = document.getElementById("next-project");
    const projectStatus = document.getElementById("project-status");

    const workTitle = document.getElementById("work-title");
    const workIntro = document.getElementById("work-intro");
    let activeProject = 0;

    function showProject(index) {
        // Wrap around from the last project to the first, and vice versa.
        activeProject =
            (index + projectCards.length) % projectCards.length;

        projectCards.forEach((card, cardIndex) => {
            card.hidden = cardIndex !== activeProject;
        });

        const title = projectCards[activeProject]
            .querySelector("h3")
            .textContent.trim();

        const card = projectCards[activeProject];
        if (workTitle) workTitle.textContent = card.dataset.heading || title;
        if (workIntro && card.dataset.intro) workIntro.textContent = card.dataset.intro;
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            [workTitle, workIntro].forEach(element => {
                if (!element?.animate) return;
                element.getAnimations().forEach(animation => animation.cancel());
                element.animate(
                    [{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }],
                    { duration: 220, easing: "ease-out" }
                );
            });
        }
        projectCarousel.dispatchEvent(new Event("projectchange"));

        projectStatus.textContent =
            `${activeProject + 1} / ${projectCards.length} — ${title}`;
    }

    if (projectCards.length > 0) {
        projectCards.forEach((card, index) => {
            card.setAttribute("role", "group");
            card.setAttribute("aria-roledescription", "slide");
            card.setAttribute(
                "aria-label",
                `${index + 1} of ${projectCards.length}`
            );
        });

        previousButton.hidden = projectCards.length < 2;
        nextButton.hidden = projectCards.length < 2;

        previousButton.addEventListener("click", () => {
            showProject(activeProject - 1);
        });

        nextButton.addEventListener("click", () => {
            showProject(activeProject + 1);
        });

        // Keyboard arrows work while either carousel button is focused.
        projectCarousel.querySelector(".carousel-buttons")
            .addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    showProject(activeProject - 1);
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    showProject(activeProject + 1);
                }
            });

        projectCarousel.classList.add("is-ready");
        showProject(0);
    }
}

mobileScreen.addEventListener("change", updateNavigation);
updateNavigation();
 
// Fit the full spotlight (heading, controls, image, and copy) below the header.
const work = document.getElementById("work");
if (work && projectCarousel) {
    const header = document.querySelector(".site-header");
    function sizeSpotlight() {
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        document.documentElement.style.setProperty("--header-height", headerHeight + "px");
        if (window.innerWidth <= 640) return;
        const heading = work.querySelector(".section-heading");
        const controls = work.querySelector(".carousel-controls");
        const title = document.getElementById("work-title");
        if (title) {
            const current = title.textContent;
            title.style.minHeight = "";
            let titleHeight = 0;
            projectCarousel.querySelectorAll(".project-card").forEach(card => {
                title.textContent = card.dataset.heading || current;
                titleHeight = Math.max(titleHeight, title.getBoundingClientRect().height);
            });
            title.textContent = current;
            title.style.minHeight = Math.ceil(titleHeight) + "px";
        }
        let copyHeight = 0;
        // Measure every slide so advancing never hides a longer caption.
        projectCarousel.querySelectorAll(".project-card").forEach(card => {
            const wasHidden = card.hidden;
            card.hidden = false;
            copyHeight = Math.max(copyHeight, card.querySelector(".project-info").getBoundingClientRect().height);
            card.hidden = wasHidden;
        });
        const available = window.innerHeight - headerHeight - 16 - 28
            - heading.getBoundingClientRect().height - 16
            - controls.getBoundingClientRect().height - 12 - copyHeight - 24;
        work.style.setProperty("--spotlight-height", Math.max(260, Math.min(640, available)) + "px");
    }
    function landOnWork() {
        if (!["#work", "#projects"].includes(window.location.hash)) return;
        sizeSpotlight();
        // Native anchors respect the measured sticky-header offset.
        const top = work.getBoundingClientRect().top + window.scrollY
            - (header ? header.getBoundingClientRect().height : 0) - 16;
        window.scrollTo({ top, behavior: "instant" });
    }
    sizeSpotlight();
    window.addEventListener("resize", sizeSpotlight);
    projectCarousel.addEventListener("projectchange", sizeSpotlight);
    window.addEventListener("load", landOnWork, { once: true });
    window.addEventListener("hashchange", landOnWork);
    document.querySelectorAll('a[href="#work"], a[href="#projects"]').forEach(link => {
        link.addEventListener("click", () => requestAnimationFrame(landOnWork));
    });
    if (document.fonts) document.fonts.ready.then(sizeSpotlight);
}
