let didshowMessage = false;
function showMessage() {
  const message = "test message for the ESLint";
  for (let i = 0; i < 5; i++) {
    console.log(message);
  }
}

showMessage();
