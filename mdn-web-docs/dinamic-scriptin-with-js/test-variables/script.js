// Add your code here
const myName = "Marco Rossel";
const myAge = 31;
// Don't edit the code below here!

section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = myName;
const para2 = document.createElement("p");
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
