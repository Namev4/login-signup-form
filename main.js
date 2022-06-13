// Here we use a little bit of JavaScript DOM to make the page look better and work better.
const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

// Here we use a addEventListener to make the button work.
signInBtn.addEventListener("click", () => {
  mainSection.classList.add("slideRight");
  asideSection.classList.add("slideLeft");
});

// and here we use a addEventListener to make a good user experience.
signUpBtn.addEventListener("click", () => {
  mainSection.classList.remove("slideRight");
  asideSection.classList.remove("slideLeft");
});
