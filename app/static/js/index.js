const chatLog = document.getElementById("chat-log");
const chatInput = document.getElementById("chat-input");

function sendMessage() {
  const message = chatInput.value;
  // Send the message to the server/API and handle the response
  // ...

  // Add the user's message to the chat log
  chatLog.innerHTML += `<div class="user-message">${message}</div>`;
  chatInput.value = "";
}

chatInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    sendMessage();
  }
});
