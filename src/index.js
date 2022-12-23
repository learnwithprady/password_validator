const criteriaMapper = {
  lowerCase: /(?=.*[a-z])/,
  upperCase: /(?=.*[A-Z])/,
  digit: /(?=.*[0-9])/,
  specialChar: /(?=.+[!@#$%^&*])/,
  minEightDigits: /(?=.{8,})/
};
const btnSubmit = document.getElementById("btnCheck");

btnSubmit.addEventListener("click", () => {
  const passText = document.getElementById("passw").value;
  const messageDom = document.getElementsByClassName("message")[0];

  const isValidPass =
    criteriaMapper.lowerCase.test(passText) &&
    criteriaMapper.upperCase.test(passText) &&
    criteriaMapper.digit.test(passText) &&
    criteriaMapper.specialChar.test(passText) &&
    criteriaMapper.minEightDigits.test(passText);

  if (!isValidPass) {
    messageDom.innerText = "Password doesn't meet the min criteria";
    messageDom.classList.remove("success");
    messageDom.classList.add("error");
  } else {
    messageDom.innerText = "Password successfully set";
    messageDom.classList.remove("error");
    messageDom.classList.add("success");
  }
});
