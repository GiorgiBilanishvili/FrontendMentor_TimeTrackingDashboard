const data = [
  {
    title: "Work",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];

// ღილაკები
const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");

// ნაგულისხმევად – Weekly
let currentTimeframe = "weekly";

// გვერდის ჩატვირთვისას აჩვენე Weekly მონაცემები და გააქტიურე “Weekly”
window.addEventListener("DOMContentLoaded", () => {
  updateAllCards();
  setActive(weeklyBtn);
});

// ღილაკების Event Listener-ები
dailyBtn.addEventListener("click", () => {
  currentTimeframe = "daily";
  updateAllCards();
  setActive(dailyBtn);
});

weeklyBtn.addEventListener("click", () => {
  currentTimeframe = "weekly";
  updateAllCards();
  setActive(weeklyBtn);
});

monthlyBtn.addEventListener("click", () => {
  currentTimeframe = "monthly";
  updateAllCards();
  setActive(monthlyBtn);
});

// ფუნქცია, რომელიც აახლებს ყველა ბარათს ერთდროულად
function updateAllCards() {
  data.forEach((item) => {
    const section = document.querySelector(
      `.${item.title.toLowerCase().replace(" ", "_")}`
    );

    if (section) {
      const hoursEl = section.querySelector(".hours");
      const lastWeekEl = section.querySelector(".last_week_hours");

      const { current, previous } = item.timeframes[currentTimeframe];

      hoursEl.textContent = `${current}hrs`;

      const label =
        currentTimeframe === "daily"
          ? "Last Day"
          : currentTimeframe === "weekly"
          ? "Last Week"
          : "Last Month";

      lastWeekEl.textContent = `${label} - ${previous}hrs`;
    }
  });
}

// ფუნქცია აქტიური ღილაკის ფერისთვის
function setActive(activeBtn) {
  [dailyBtn, weeklyBtn, monthlyBtn].forEach((btn) =>
    btn.classList.remove("active")
  );
  activeBtn.classList.add("active");
}
