
function receivedMessage(event) {
  const token = localStorage.getItem('token');
  event.source.postMessage('sending message from sso, token: ' + token);
}

window.addEventListener("message", receivedMessage, false);