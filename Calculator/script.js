'use strict'
const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars =[ "%","*","/","-","+","="];

let string = "";

const calculate = (btnValue) => {
  input.focus();
  if(btnValue === "=" && string !== ""){
    string = eval(string.replace("%","/100"));

  }else if(btnValue === "AC"){
    string = "";

  }else if(btnValue === "DEL"){
    string = string.toString().slice(0, -1);

  }else{
    if(string === "" && specialChars.includes(btnValue)) return;
    string += btnValue;
  }
  input.value = string;
};

buttons.forEach((button) => {
button.addEventListener("click", (e) =>
calculate(e.target.dataset.value));

});

