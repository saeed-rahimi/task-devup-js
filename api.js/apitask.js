"use strict";

const createCard = function (adviceData) {
  const div = document.createElement("div");

  const id = document.createElement("p");
  id.textContent = `Advice ID: ${adviceData.id}`;

  const advice = document.createElement("p");
  advice.textContent = adviceData.advice;

  div.append(id, advice);

  document.querySelector(".container").append(div);
};

const request = new XMLHttpRequest();
request.open("GET", "https://api.adviceslip.com/advice");
request.send();

request.addEventListener("load", function () {
  const response = JSON.parse(request.responseText);
  const { slip: adviceData } = response;

  createCard(adviceData);

  const request2 = new XMLHttpRequest();
  request2.open("GET", "https://api.adviceslip.com/advice");
  request2.send();

  request2.addEventListener("load", function () {
    const response = JSON.parse(request2.responseText);
    const { slip: adviceData } = response;

    createCard(adviceData);
  });
});
