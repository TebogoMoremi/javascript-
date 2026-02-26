// main.js
import { increment, reset, getCount } from "./counter.js";
import { saveCount } from "./storage.js";
import { STRINGS } from "./constants.js"

const countEl = document.getElementById(STRINGS.count_el);
const saveEl = document.getElementById(STRINGS.save_el);

// Increment counter
window.increment = function () {
  countEl.textContent = increment();
};

// Save counter and reset
window.save = function () {
  const currentCount = getCount();
  const formattedText = saveCount(currentCount);

  if (!formattedText) return;

  saveEl.textContent = formattedText;
  countEl.textContent = reset();
};
