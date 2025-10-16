const userTime = document.getElementById('user-time');
const startTime = Date.now();

userTime.textContent = `${String(startTime)} ms`

// setInterval(() => {
//   const userCurrTime = Date.now() - startTime;

//   userTime.textContent = `User time: ${String(userCurrTime)}ms`;
// }, 1);