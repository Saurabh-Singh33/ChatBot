const API_KEY = "Your OpenRouter API Key"; // Replace with your actual OpenRouter API key
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  messageInput.value = "";

  // Send to API
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.choices && data.choices[0]) {
        const reply = data.choices[0].message.content;
        addMessage(reply, "bot");
      } else {
        addMessage("Sorry, I couldn't understand that.", "bot");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      addMessage("Sorry, there was an error. Please try again.", "bot");
    });
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender + "-message");
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
