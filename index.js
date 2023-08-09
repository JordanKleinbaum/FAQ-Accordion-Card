const questions = document.querySelectorAll(".question_and_carrot");

questions.forEach((question) => {
  const answer = question.nextElementSibling;
  const carrot = question.querySelector(".carrot");

  question.addEventListener("click", () => {
    if (answer.style.maxHeight) {
      answer.style.overflow = "hidden";
      answer.style.maxHeight = null;
      question.style.fontWeight = "normal";
      carrot.style.transform = "rotate(0deg)";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.style.fontWeight = "bold";
      carrot.style.transform = "rotate(180deg)";
    }
  });
});
