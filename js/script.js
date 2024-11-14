function updateTime() {
  const clockContainer = document.querySelector(".clock-container");
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  clockContainer.textContent = `Tarih: ${day}.${month}.${year} | Saat: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

function toggleMoreInfo() {
  const moreInfo = document.getElementById("more-info");
  const button = document.getElementById("more-info-btn");

  moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
  button.textContent =
    moreInfo.style.display === "block" ? "Daha az gör" : "Daha çok gör";
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  const buttons = document.querySelectorAll(".project-filter button");
  buttons.forEach((button) => {
    if (button.getAttribute("data-filter") === category) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  filterProjects("all");
});

function openModal(title, description) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;

  const projectImage = event.target
    .closest(".project")
    .querySelector("img").src;
  document.getElementById("modal-image").src = projectImage;
  document.getElementById("project-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("project-modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) {
    closeModal();
  }
};

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorMessage.textContent = "Lütfen tüm alanları doldurunuz.";
    return false;
  } else if (!emailPattern.test(email)) {
    errorMessage.textContent = "Geçerli bir e-posta adresi giriniz.";
    return false;
  }

  errorMessage.textContent = "";
  alert("Mesajınız başarıyla gönderildi!");
  return true;
}
