const select = document.querySelector("select");
const createOptions = (num) => {
  for (let i = 1; i <= num; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    select.appendChild(option);
  }
};
createOptions(20);

const button = document.querySelector("button");
