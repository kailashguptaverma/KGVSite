// Keep the copyright year current.
document.getElementById("year").textContent = new Date().getFullYear();

// The navigation stays visible if JavaScript is unavailable.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
const mobileScreen = window.matchMedia("(max-width: 640px)");

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.hidden = mobileScreen.matches;
}

function updateNavigation() {
    menuButton.hidden = !mobileScreen.matches;
    closeMenu();
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.hidden = isOpen;
});

navigation.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileScreen.matches) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        mobileScreen.matches &&
        menuButton.getAttribute("aria-expanded") === "true"
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