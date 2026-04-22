import { division } from "./division.js";

const nodeinputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");


nodeBtn.addEventListener("click", ()=>{
    console.log(division(nodeinputOne.value, nodeInputTwo.value));
});