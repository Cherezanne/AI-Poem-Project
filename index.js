function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem comes here",
    autoStart: true,
    delay: 70,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
