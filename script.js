
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white");
    const number = card.querySelector(".hotline").textContent;
    heartCount++;
    heartDisplay.textContent = heartCount;
    alert(`You liked number: ${number}`);
  });
});

document.querySelectorAll(".copyBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white");
    const number = card.querySelector(".hotline").textContent;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyDisplay.textContent = copyCount;
    alert(`Copied number: ${number}`);
  });
});

document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".bg-white");
    const name = card.querySelector("h3").textContent;
    const number = card.querySelector(".hotline").textContent;

    if (coinCount >= 20) {
      coinCount -= 20;
      coinDisplay.textContent = coinCount;
      alert(`Calling...\n ${name} at ${number}`);

      const time = new Date().toLocaleTimeString();

      const li = document.createElement("li");
      li.className =
        "flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm";
      li.innerHTML = `
            <div>
              <p class="font-semibold text-[15px]">${name}</p>
              <p class="text-gray-600 text-sm">${number}</p>
            </div>
            <p class="text-gray-500 text-xs">${time}</p>
          `;
      historyList.prepend(li);
    } else {
      alert("Not enough coins to make a call!");
    }
  });
});

clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});
