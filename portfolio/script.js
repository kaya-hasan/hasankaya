const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("form-note");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navLinks.classList.toggle("is-open");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navToggle?.classList.remove("is-open");
    navLinks?.classList.remove("is-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!email || !message) {
      formNote.textContent = "Lütfen email ve mesaj alanını doldurun.";
      return;
    }

    formNote.textContent = "Mesajınız alındı. En kısa sürede dönüş yapılabilir.";
    contactForm.reset();
  });
}
