const nextBtnPage1 = document.getElementById("nextBtn-page1");
const nextBtnPage2 = document.getElementById("nextBtn-page2");
const formNumber1 = document.getElementById("formNumber-1");
const formNumber2 = document.getElementById("formNumber-2");
const formNumber3 = document.getElementById("formNumber-3");
const firstPageForm = document.querySelector(".firstPageCtaForm");
const secondPageForm = document.querySelector(".secondPageCtaForm");
const thirdPageForm = document.querySelector(".thirdPageCtaForm");
const backPage2 = document.getElementById("back-page2");
const backPage3 = document.getElementById("back-page3");
const formTitle1 = document.getElementById("formTitle-1");
const formTitle2 = document.getElementById("formTitle-2");
const formTitle3 = document.getElementById("formTitle-3");

/** form validation */
const playerFirstName = document.getElementById("playerFirstName");
const playerLastName = document.getElementById("playerLastName");
const playerDOB = document.getElementById("playerDOB");
const fNameAlert = document.getElementById("fNameAlert");
const lNameAlert = document.getElementById("lNameAlert");
const dobAlert = document.getElementById("dobAlert");
const genderAlert = document.getElementById("genderAlert");

/** CTA form functionality */

/** current page is one & clicked on next btn page 1 */
nextBtnPage1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked on next btn page 1");
  /* validate first page before changing pages */
  if (playerFirstName === null || playerFirstName.value === "") {
    fNameAlert.classList.add("active");
    return;
  } else if (playerLastName === null || playerLastName.value === "") {
    lNameAlert.classList.add("active");
    return;
  } else if (playerDOB === null || playerDOB.value === "") {
    dobAlert.classList.add("active");
    return;
  } else {
    fNameAlert.classList.remove("active");
    lNameAlert.classList.remove("active");
    dobAlert.classList.remove("active");

    console.log(
      document.querySelector("input[name='playerGender']:checked").value
    );
    /** validate is over */
    firstPageForm.classList.remove("formPageActive");
    formNumber1.classList.remove("filled");
    secondPageForm.classList.add("formPageActive");
    formNumber2.classList.add("filled");
    formTitle1.classList.remove("active");
    formTitle2.classList.add("active");
  }
});

backPage2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked back to first page btn");
  secondPageForm.classList.remove("formPageActive");
  formNumber2.classList.remove("filled");
  firstPageForm.classList.add("formPageActive");
  formNumber1.classList.add("filled");
  formTitle1.classList.add("active");
  formTitle2.classList.remove("active");
});

/** current page is two & clicked on next btn page 2 */
nextBtnPage2.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked on next btn page 2");
  secondPageForm.classList.remove("formPageActive");
  formNumber2.classList.remove("filled");
  thirdPageForm.classList.add("formPageActive");
  formNumber3.classList.add("filled");
  formTitle2.classList.remove("active");
  formTitle3.classList.add("active");
});

backPage3.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked back to second page btn");
  thirdPageForm.classList.remove("formPageActive");
  formNumber3.classList.remove("filled");
  secondPageForm.classList.add("formPageActive");
  formNumber2.classList.add("filled");
  formTitle2.classList.add("active");
  formTitle3.classList.remove("active");
});
