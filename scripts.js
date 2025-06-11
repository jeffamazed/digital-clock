// DIGITAL CLOCK PROGRAM

const formatBtn = document.getElementById("format-btn");

function runClock() {
  let format12Hour = true;
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    let meridiem;
    let timeString;

    if (format12Hour) {
      meridiem = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      hours = hours.toString().padStart(2, 0);

      timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    } else {
      timeString = `${hours}:${minutes}:${seconds}`;
    }

    document.getElementById("clock").textContent = timeString;
  }

  function changeFormat() {
    format12Hour = !format12Hour;
    return format12Hour;
  }

  return { updateClock, changeFormat };
}

const clock = runClock();
clock.updateClock();
setInterval(() => {
  clock.updateClock();
}, 1000);

formatBtn.addEventListener("click", () => {
  const format12Hour = clock.changeFormat();
  clock.updateClock();
  formatBtn.textContent = format12Hour ? "12-hour format" : "24-hour format";
  formatBtn.setAttribute(
    "aria-label",
    format12Hour ? "Change to 24-hour format" : "Change to 12-hour format"
  );
});
