const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal Open Function

const openModal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    modal.classList.add("overlayactive");
};

// Modal close function

const closeModal = () => {
    modal.classList.remove("active");
    modal.classList.remove("overlayactive");
};


