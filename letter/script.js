const text =
  "Dear Khushi❤️ ,  I wnna Say Something.         Every passing day without you feels like a piece of me is missing. Your laughter, your kindness, your unwavering support—these are the things I find myself more than ever. Life seems a little less colorful without your presence by my side. There's a void in my heart that only your friendship can fill. Do you remember the how much fun we did on our school trips. I miss our late-night conversations. There's a unique comfort in being able to be completely yourself with someone, and that's a comfort I find only in you. BTW I apologies for what misunderstanding is happended and here is gift what u want";



const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];
    i++;
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  } else {
    showGift();
  }
}

function interval(letter) {
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function showGift() {
  const giftContainer = document.querySelector(".giftContainer");
  giftContainer.style.display = "flex";
}

function startFromBegin() {
  i = 0;
  document.querySelector(".textCont").textContent = '';
  dashOut(paragraph);
}

startFromBegin();
