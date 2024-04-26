let benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function showBenefits() {
  const benefitBox = document.querySelector("#benefits");
  for (let i = 0; i < benefits.length; i++) {
    const subBenefit = document.createElement("div");
    subBenefit.className = "subBenefit";

    const checkIcon = document.createElement("img");
    checkIcon.className = "check-icon";
    checkIcon.alt = "check icon";
    checkIcon.src =
      "./public/assets/images/icon-success.svg";

    const benefitTag = document.createElement("p");
    const benefitText = document.createTextNode(benefits[i]);
    benefitTag.appendChild(benefitText);
    benefitTag.className = "subBenefit";

    subBenefit.appendChild(checkIcon);
    subBenefit.appendChild(benefitTag);

    benefitBox.appendChild(subBenefit);
  }
}

showBenefits();

function handleSubscribeNewsletter(event) {
  event.preventDefault();
  const inputValue = document.getElementById("#input-email");
  localStorage.setItem("inputValue", inputValue);
  window.location.href = "./successPage/index.html";
  location.replace(./successPage/index.html");
  console.log(localStorage.getItem("inputValue"));
}
