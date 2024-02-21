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

const submitFormBtn = document.getElementById("submitBtn-ctaForm");

const ctaForm = document.getElementById("ctaForm");

/** form validation */
const playerFirstName = document.getElementById("playerFirstName");
const playerLastName = document.getElementById("playerLastName");
const playerDOB = document.getElementById("playerDOB");

const parentName = document.getElementById("parentName");
const relationshipRadio = document.querySelector(
  "input[name='playerParent']:checked"
);
const playerEmail = document.getElementById("playerEmail");
const playerPhone = document.getElementById("playerPhone");
const playerAddress = document.getElementById("playerAddress");

const currTeam = document.getElementById("currTeam");

const fNameAlert = document.getElementById("fNameAlert");
const lNameAlert = document.getElementById("lNameAlert");
const dobAlert = document.getElementById("dobAlert");
const genderAlert = document.getElementById("genderAlert");
const contactNameAlert = document.getElementById("contactNameAlert");
const relationshipAlert = document.getElementById("relationshipAlert");
const emailAlert = document.getElementById("emailAlert");
const currTeamAlert = document.getElementById("currTeamAlert");
const levelAlert = document.getElementById("levelAlert");

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
  } else if (
    document.querySelector("input[name='playerGender']:checked") === null ||
    document.querySelector("input[name='playerGender']:checked").value === ""
  ) {
    console.log(document.querySelector("input[name='playerGender']:checked"));
    genderAlert.classList.add("active");
    return;
  } else {
    fNameAlert.classList.remove("active");
    lNameAlert.classList.remove("active");
    dobAlert.classList.remove("active");
    genderAlert.classList.remove("active");
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
  if (parentName === null || parentName.value === "") {
    contactNameAlert.classList.add("active");
    return;
  } else if (
    document.querySelector("input[name='playerParent']:checked") === null ||
    document.querySelector("input[name='playerParent']:checked") === ""
  ) {
    relationshipAlert.classList.add("active");
    return;
  } else if (playerEmail === null || playerEmail.value === "") {
    console.log("there is no email: " + playerEmail.value);
    emailAlert.classList.add("active");
    return;
  } else {
    contactNameAlert.classList.remove("active");
    relationshipAlert.classList.remove("active");
    emailAlert.classList.remove("active");
    secondPageForm.classList.remove("formPageActive");
    formNumber2.classList.remove("filled");
    thirdPageForm.classList.add("formPageActive");
    formNumber3.classList.add("filled");
    formTitle2.classList.remove("active");
    formTitle3.classList.add("active");
  }
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

submitFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked on final submit Btn");
  /** check form before submitting */
  console.log("Player First Name: " + playerFirstName.value);
  console.log("Player Last Name: " + playerLastName.value);
  console.log("Player DOB: " + playerDOB.value);
  console.log(
    "Player Gender: " +
      document.querySelector("input[name='playerGender']:checked").value
  );
  console.log("Player Parent: " + parentName.value);
  console.log(
    "Player Relationship: " +
      document.querySelector("input[name='playerParent']:checked").value
  );
  console.log("Player Email: " + playerEmail.value);
  if (currTeam === null || currTeam.value === "") {
    currTeamAlert.classList.add("active");
    return;
  } else if (
    document.querySelector("input[name='playerLevel']:checked") === null ||
    document.querySelector("input[name='playerLevel']:checked").value === ""
  ) {
    levelAlert.classList.add("active");
    return;
  } else {
    console.log("Player Team: " + currTeam.value);
    console.log(
      "Curr Level: " +
        document.querySelector("input[name='playerLevel']:checked").value
    );
    window.location.href = "formSubmission.html";
  }
});
