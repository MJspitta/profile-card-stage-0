// CURRENT USER TIME DISPLAY

const userTime = document.getElementById('user-time');
const startTime = Date.now();

userTime.textContent = `${String(startTime)} ms`;