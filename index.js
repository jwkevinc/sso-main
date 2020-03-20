
function receivedMessage(event) {
  const token = localStorage.getItem('token');
  event.source.postMessage('sent from sso, token: ' + token);
}

window.addEventListener("message", receivedMessage, false);