let buttons = document.querySelectorAll(".button");
let array = [];
let enterButton = document.querySelector(".enter-button");
const display = document.querySelector(".display-container");
const para = document.createElement("p");
const output = document.createElement("p");
display.appendChild(para);
display.appendChild(output);

function add(array) {
  return array.reduce((accum, total) => parseFloat(accum) + parseFloat(total));
}

function subtract(array) {
  return array.reduce((accum, total) => accum - total);
}

function multiply(array) {
  return array.reduce((accum, total) => accum * total);
}

function divide(array) {
  return array.reduce((accum, total) => accum / total);
}

const getArrayValues = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      array.push(button.textContent);
      para.textContent += button.textContent;
      console.log(array);
    });
  });
};

enterButton.addEventListener("click", () => {
  if (array.includes("+")) {
    const index = array.indexOf("+");
    array.splice(index, 1);
    console.log(add(array));
    output.textContent = add(array);
  } else if (array.includes("-")) {
    const index = array.indexOf("-");
    array.splice(index, 1);
    console.log(add(array));
    output.textContent = subtract(array);
  } else if (array.includes("*")) {
    const index = array.indexOf("*");
    array.splice(index, 1);
    console.log(add(array));
    output.textContent = multiply(array);
  } else if (array.includes("/")) {
    const index = array.indexOf("/");
    array.splice(index, 1);
    console.log(add(array));
    output.textContent = divide(array);
  }
  para.textContent = "";
  array = [];
});

getArrayValues();
