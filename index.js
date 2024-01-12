const btnSend01 = document.getElementById("sendBtn01");
const btnSend02 = document.getElementById("sendBtn02");
console.log(btnSend02);

async function SendForm() {
  const phone01 = document.getElementById("inputPhone01").value;
  const email01 = document.getElementById("inputEmail01").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append(
    "payload",
    '{"channel": "#temp_chat_notification_eyeiyagi", "text": "Email: ' +
      email01 +
      "\nPhone: " +
      phone01 +
      '"}'
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(
    "https://hooks.slack.com/services/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",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

btnSend01.addEventListener("click", () => {
  SendForm();
});

async function SendForm2() {
  const phone02 = document.getElementById("inputPhone02").value;
  const email02 = document.getElementById("inputEmail02").value;
  const message02 = document.getElementById("inputMessage02").value;
  const name02 = document.getElementById("inputName02").value;

  console.log(phone02, email02, name02, message02);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append(
    "payload",
    '{"channel": "#temp_chat_notification_eyeiyagi", "text": "Email: ' +
      email02 +
      "\nPhone: " +
      phone02 +
      "\nMessage: " +
      message02 +
      "\nName: " +
      name02 +
      '"}'
  );

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch(
    "https://hooks.slack.com/services/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",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

btnSend02.addEventListener("click", () => {
  SendForm2();
});
