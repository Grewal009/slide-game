const items = {
  box1: "1",
  box2: "2",
  box3: "3",
  box4: "4",
  box5: "5",
  box6: "6",
  box7: "7",
  box8: "8",
  box9: "",
};

function trackGame(clickedEl) {
  let count = 0;
  console.log("clickedEl.innerText : ", clickedEl.id);
  console.log("items[clickedEl.id] : ", items[clickedEl.id]);
  if (clickedEl.innerText == items[clickedEl.id]) {
    console.log("correct");
  }
  for (let i = 1; 1 <= 9; i++) {
    if (items["box" + i] == document.getElementById("box" + i).innerText) {
      count = count + 1;
      console.log(count);
      if (count == 9) {
        console.log("Gratulerer!!!");
        let body = document.querySelector("body");
        console.log(body);
        let container = document.querySelector(".container");
        container.classList.add("disabled");
        let newElement = document.createElement("h1");
        newElement.innerText = "Gratulerer🚀";
        newElement.classList.add("new");
        console.log(newElement);

        body.appendChild(newElement);
        console.log(body);
        return;
      }
      continue;
    } else {
      break;
    }
  }
}

//improved code
function changeThreeEle(clickedElement, ele1, ele2, ele3) {
  test(test(test(clickedElement, ele1), ele2), ele3);
}

function changeFourEle(clickedElement, ele1, ele2, ele3, ele4) {
  test(test(test(test(clickedElement, ele1), ele2), ele3), ele4);
}

function changeTwoEle(clickedElement, ele1, ele2) {
  test(test(clickedElement, ele1), ele2);
}

function test(clickedEl, ele) {
  if (document.getElementById(ele).innerText == "") {
    document.getElementById(ele).innerText = clickedEl.innerText;
    clickedEl.innerText = "";
    trackGame(clickedEl);
  }
  return clickedEl;
}

// code using if statements

/* function changeThreeEle(clickedElement, ele1, ele2, ele3) {
  if (document.getElementById(ele1).innerText == "") {
    document.getElementById(ele1).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele2).innerText == "") {
    document.getElementById(ele2).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele3).innerText == "") {
    document.getElementById(ele3).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
}

function changeFourEle(clickedElement, ele1, ele2, ele3, ele4) {
  if (document.getElementById(ele1).innerText == "") {
    document.getElementById(ele1).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele2).innerText == "") {
    document.getElementById(ele2).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele3).innerText == "") {
    document.getElementById(ele3).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele4).innerText == "") {
    document.getElementById(ele4).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
}

function changeTwoEle(clickedElement, ele1, ele2) {
  if (document.getElementById(ele1).innerText == "") {
    document.getElementById(ele1).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
  if (document.getElementById(ele2).innerText == "") {
    document.getElementById(ele2).innerText = clickedElement.innerText;
    clickedElement.innerText = "";
  }
}
 */
