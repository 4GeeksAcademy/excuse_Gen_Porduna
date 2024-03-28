/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = [
    "The stone",
    "My knife",
    "Your lighter",
    "Their car",
    "That isekai"
  ];
  let action = ["broke", "steped into", "hid", "exploded", "drew"];
  let thing = [
    "the Network",
    "the Moon",
    "my screen",
    "the keys",
    "the One Piece"
  ];
  let when = [
    "last night.",
    "yesterday.",
    "last week.",
    "an hour ago.",
    "ages ago."
  ];

  // Solución #1

  // let whoIndex = Math.floor(Math.random() * who.length);
  // let actionIndex = Math.floor(Math.random() * action.length);
  // let thingIndex = Math.floor(Math.random() * thing.length);
  // let whenIndex = Math.floor(Math.random() * when.length);

  // return (
  //   who[whoIndex] +
  //   " " +
  //   action[actionIndex] +
  //   " " +
  //   thing[thingIndex] +
  //   " " +
  //   when[whenIndex]
  // );

  // Solución #2

  let arrayExcusas = [who, action, thing, when, ];

  let excusa = arrayExcusas.map ( (elementoArray) => {
    return elementoArray [Math.floor (Math.random() * elementoArray.length)];
  })

  return excusa.join(" ");
};
