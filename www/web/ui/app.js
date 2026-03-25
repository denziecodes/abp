const term = document.getElementById("terminal");
const input = document.getElementById("input");

const ws = new WebSocket(`ws://${location.hostname}:8080/ws`);

ws.onmessage = (e) => {
  term.innerText += e.data;
  term.scrollTop = term.scrollHeight;
};

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    ws.send(input.value + "\n");
    input.value = "";
  }
});
