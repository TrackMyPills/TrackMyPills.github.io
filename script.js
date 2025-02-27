document.addEventListener("DOMContentLoaded", function () {
  const greetings = [
    "Good Morning!",
    "Buenos Días!",
    "Bonjour!",
    "Guten Morgen!",
    "Buongiorno!",
    "Ohayou Gozaimasu!",
    "Dobroye Utro!",
    "좋은 아침이에요!",
    "おはようございます!",
    "Καλημέρα!",
    "Goeie môre!",
    "Goedemorgen!",
    "Доброе Утро!",
    "!בוקר טוב",
  ];
  document.getElementById("greeting").textContent =
    greetings[Math.floor(Math.random() * greetings.length)];
});

function displayOutput() {
  input = document.getElementById("userInput").value;
  output = document.getElementById("output");

  validChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", " "];
  for (i = 0; i < input.length; i++) {
    if (!validChars.includes(input[i])) {
      output.textContent = "invalid input :(";
      return;
    }
  }

  for (i = 0; i < input.length; i++) {
    if (input[i] == " " || input[i] == "/" || input[i] == ",") {
      if (i != 0) {
        if (input[i - 1] == "|") {
          continue;
        }
      }
      input =
        input.substring(0, i) + "|" + input.substring(i + 1, input.length);
    }
  }
  input.replace(/ /g, "");
  inputarr = input.split("|");
  output.textContent = input;

  console.log(inputarr);

  currentYear = new Date().getFullYear();

  const date1 = Date.UTC(currentYear, parseInt(inputarr[1]) - 1, inputarr[0]);
  console.log(
    "first: " +
      currentYear +
      "/" +
      (parseInt(inputarr[1]) - 1) +
      "/" +
      inputarr[0]
  );
  const date2 = Date.UTC(currentYear, parseInt(inputarr[3]) - 1, inputarr[2]);
  console.log(
    "second: " +
      currentYear +
      "/" +
      (parseInt(inputarr[3]) - 1) +
      "/" +
      inputarr[2]
  );

  const differenceInMilliseconds = date2 - date1;
  console.log(differenceInMilliseconds);
  const differenceInDays =
    (differenceInMilliseconds / (1000 * 60 * 60 * 24) + 365) % 365;

  tabletsReturned = inputarr[4];
  shouldBe = 70 - 2 * differenceInDays;
  if (shouldBe == tabletsReturned) {
    output.style.color = "green";
    output.textContent = "All good :)";
  } else {
    output.style.color = "red";
    if (shouldBe > tabletsReturned) {
      output.textContent =
        shouldBe -
        tabletsReturned +
        " too few tablets returned.\nShould be " +
        shouldBe;
    } else {
      output.textContent =
        tabletsReturned -
        shouldBe +
        " too many tablets returned.\nShould be " +
        shouldBe;
    }
  }
}
