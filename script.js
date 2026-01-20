/* =========================================================
   PAGE LOAD TRANSITION
========================================================= */
window.addEventListener("load", () => {
  const transition = document.getElementById("page-transition");

  if (transition) {
    transition.style.animation = "revealDown 0.5s ease-out forwards";
  }
});

/* =========================================================
   FORM SUBMISSION (FORMSpree – AJAX)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quote-form");
  const submitButton = document.getElementById("submit-button");

  if (!form || !submitButton) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const response = await fetch("https://formspree.io/f/mvzpvlwl", {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        window.location.href = "thank-you.html";
      } else {
        throw new Error("Submission failed");
      }

    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
      alert("Something went wrong. Please try again.");
    }
  });
});
submitButton.innerHTML = "⏳ Sending...";
form.reset();


