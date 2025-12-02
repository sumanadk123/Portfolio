const row = document.querySelector(".certificates-row");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

// Arrow scroll amount
const scrollAmount = 300;

leftArrow.onclick = () => {
    row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
};

rightArrow.onclick = () => {
    row.scrollBy({ left: scrollAmount, behavior: "smooth" });
};

document.querySelectorAll(".cert-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const imgSrc = btn.dataset.img;
        document.getElementById("popup-img").src = `images/${imgSrc}`;
        document.getElementById("cert-popup").style.display = "flex";
    });
});

document.querySelector(".cert-close").addEventListener("click", () => {
    document.getElementById("cert-popup").style.display = "none";
});

// PROJECT SECTION
const projectScroll = document.querySelector(".projects-grid");
const projectLeft = document.querySelector(".project-left");
const projectRight = document.querySelector(".project-right");

// prevent null errors
if (projectLeft && projectRight) {
    projectLeft.onclick = () => {
        console.log('left arrow is clicked.');
        projectScroll.scrollBy({ left: -300, behavior: "smooth" });
    };

    projectRight.onclick = () => {
        console.log('right arrow is clicked.');
        projectScroll.scrollBy({ left: 300, behavior: "smooth" });
    };
}

