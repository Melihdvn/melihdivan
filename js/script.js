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
