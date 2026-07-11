const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("form-note");
const languageToggle = document.querySelector(".language-toggle");
const languageOptions = document.querySelectorAll(".language-option");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatablePlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const translatableMetaContent = document.querySelectorAll("[data-i18n-content]");

const translations = {
  tr: {
    "meta.title": "Hasan Kaya | Yazılım Portfolyosu",
    "meta.description":
      "Hasan Kaya'nin web tabanli yazilim projelerini, yetkinliklerini ve gelistirdigi sistemleri gosteren portfolyo sitesi.",
    "nav.projects": "Projeler",
    "nav.services": "Hizmetler",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    "hero.title": "Yazılım projeleri ile işinizi büyütün",
    "hero.subtitle": "CRM, randevu ve otomasyon sistemleri geliştiriyorum",
    "hero.ctaProjects": "Projeleri Gör",
    "hero.ctaContact": "İletişime Geç",
    "hero.point1": "Modern web arayüzleri",
    "hero.point2": "Gerçek iş akışlarına uygun sistem kurgusu",
    "hero.point3": "Performans ve kullanılabilirlik odaklı geliştirme",
    "hero.summaryChip": "Portfolyo Özeti",
    "hero.summaryTitle": "Projelerim ve Çalışmalarım",
    "hero.summaryText":
      "Farklı alanlarda geliştirdiğim yazılım projelerini ve bu süreçte edindiğim teknik yaklaşımı burada paylaşıyorum.",
    "hero.metric1Strong": "Öne çıkan",
    "hero.metric1Text": "Projeler",
    "hero.metric2Strong": "Modern",
    "hero.metric2Text": "Web arayüzleri",
    "projects.eyebrow": "Projeler",
    "projects.title": "Projelerim",
    "projects.text":
      "Proje detayları, kullanılan yapı ve öne çıkan özelliklerle birlikte burada yer alıyor.",
    "projects.clienthub.text":
      "Müşteri iletişimini, geri dönüş süreçlerini ve ekip aktivitelerini tek panelde toplayan CRM çözümü.",
    "projects.clienthub.feature1": "Müşteri takibi",
    "projects.clienthub.feature2": "Geri kazanım",
    "projects.clienthub.feature3": "Aktivite yönetimi",
    "projects.appointly.text":
      "Hizmet veren işletmeler için çakışmasız planlama ve müşteri bağlantısını kolaylaştıran randevu sistemi.",
    "projects.appointly.feature1": "Randevu sistemi",
    "projects.appointly.feature2": "Saat çakışma kontrolü",
    "projects.appointly.feature3": "Müşteri bağlantısı",
    "projects.lolchamps.text":
      "Harici API ile beslenen, arama ve filtreleme odaklı şampiyon keşif arayüzü.",
    "projects.lolchamps.feature1": "Şampiyon listeleme",
    "projects.lolchamps.feature2": "Arama ve filtreleme",
    "projects.lolchamps.feature3": "API kullanımı",
    "projects.inventory.text":
      "Ürün hareketlerini ve stok süreçlerini basit CRUD mantığıyla yöneten operasyon paneli.",
    "projects.inventory.feature1": "Stok takibi",
    "projects.inventory.feature2": "Ürün yönetimi",
    "projects.inventory.feature3": "CRUD işlemleri",
    "services.eyebrow": "Hizmetler",
    "services.title": "İş akışına uygun özel yazılım geliştirme",
    "services.crm.title": "CRM sistemleri",
    "services.crm.text":
      "Müşteri sürecini görünür kılan, satış takibini sadeleştiren özel CRM çözümleri.",
    "services.appointment.title": "Randevu sistemleri",
    "services.appointment.text":
      "Çakışma kontrolü, müşteri bağlantısı ve kolay kullanım odaklı planlama panelleri.",
    "services.custom.title": "Özel yazılım geliştirme",
    "services.custom.text":
      "İşletmelerin çalışma biçimine göre tasarlanan hafif, hızlı ve ölçeklenebilir sistemler.",
    "about.eyebrow": "Hakkımda",
    "about.title": "Yazılımı sade, işlevsel ve sürdürülebilir kurmayı önemsiyorum",
    "about.text":
      "İşletmeler için müşteri takibi ve satış odaklı yazılım çözümleri geliştiriyorum.",
    "about.cardText":
      "Kullanıcı deneyimi güçlü, performanslı ve gerçek kullanım senaryolarına uygun web arayüzleri geliştirmeye odaklanıyorum. Portfolyomda hem teknik yetkinliğimi hem de ürün bakış açımı gösteren projeler yer alıyor.",
    "contact.eyebrow": "İletişim",
    "contact.title": "Projenizi birlikte netleştirelim",
    "contact.text":
      "Kısa bir mesaj bırakın. İhtiyacınıza uygun sistem yapısını beraber çıkaralım.",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "ornek@mail.com",
    "contact.messageLabel": "Mesaj",
    "contact.messagePlaceholder": "İhtiyacınızı kısaca yazın",
    "contact.submit": "Gönder",
    "common.demo": "Demo",
    "form.error": "Lütfen email ve mesaj alanını doldurun.",
    "form.success": "Mesajınız alındı. En kısa sürede dönüş yapılabilir.",
    "aria.menu": "Menüyü aç",
    "aria.language": "Dil değiştir",
  },
  en: {
    "meta.title": "Hasan Kaya | Software Portfolio",
    "meta.description":
      "Portfolio website presenting Hasan Kaya's web-based software projects, skills, and systems.",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Grow your business with software projects",
    "hero.subtitle": "I build CRM, scheduling, and automation systems",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Get in Touch",
    "hero.point1": "Modern web interfaces",
    "hero.point2": "System design aligned with real workflows",
    "hero.point3": "Performance and usability focused development",
    "hero.summaryChip": "Portfolio Snapshot",
    "hero.summaryTitle": "My Projects and Work",
    "hero.summaryText":
      "I share software projects I have built across different areas along with the technical approach I developed in the process.",
    "hero.metric1Strong": "Featured",
    "hero.metric1Text": "Projects",
    "hero.metric2Strong": "Modern",
    "hero.metric2Text": "Web interfaces",
    "projects.eyebrow": "Projects",
    "projects.title": "My Projects",
    "projects.text":
      "This section highlights project details, structure, and standout features.",
    "projects.clienthub.text":
      "A CRM solution that brings customer communication, recovery flows, and team activity management together in one panel.",
    "projects.clienthub.feature1": "Customer tracking",
    "projects.clienthub.feature2": "Recovery workflows",
    "projects.clienthub.feature3": "Activity management",
    "projects.appointly.text":
      "A scheduling system for service businesses with conflict-free booking and customer connection features.",
    "projects.appointly.feature1": "Appointment scheduling",
    "projects.appointly.feature2": "Time conflict control",
    "projects.appointly.feature3": "Customer connection",
    "projects.lolchamps.text":
      "A champion discovery interface powered by an external API with search and filtering.",
    "projects.lolchamps.feature1": "Champion listing",
    "projects.lolchamps.feature2": "Search and filtering",
    "projects.lolchamps.feature3": "API integration",
    "projects.inventory.text":
      "An operations panel for managing product movement and stock processes with a simple CRUD structure.",
    "projects.inventory.feature1": "Stock tracking",
    "projects.inventory.feature2": "Product management",
    "projects.inventory.feature3": "CRUD operations",
    "services.eyebrow": "Services",
    "services.title": "Custom software development for real business workflows",
    "services.crm.title": "CRM systems",
    "services.crm.text":
      "Custom CRM solutions that make customer processes visible and simplify sales tracking.",
    "services.appointment.title": "Scheduling systems",
    "services.appointment.text":
      "Planning panels focused on conflict control, customer connection, and ease of use.",
    "services.custom.title": "Custom software development",
    "services.custom.text":
      "Lightweight, fast, and scalable systems designed around how businesses actually work.",
    "about.eyebrow": "About",
    "about.title": "I care about building software that is clear, functional, and sustainable",
    "about.text":
      "I develop customer tracking and sales-focused software solutions for businesses.",
    "about.cardText":
      "I focus on building web interfaces with strong user experience, solid performance, and a structure that fits real usage scenarios. My portfolio reflects both my technical skills and my product mindset.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's define your project together",
    "contact.text":
      "Leave a short message and we can shape the right system for your needs.",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "example@mail.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Briefly describe what you need",
    "contact.submit": "Send",
    "common.demo": "Demo",
    "form.error": "Please fill in both the email and message fields.",
    "form.success": "Your message has been received. A response can follow shortly.",
    "aria.menu": "Open menu",
    "aria.language": "Change language",
  },
};

let currentLanguage = localStorage.getItem("portfolio-language") || "tr";

function getTranslation(key, language = currentLanguage) {
  return translations[language][key] || translations.tr[key] || "";
}

function applyTranslations(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = getTranslation("meta.title", language);

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = getTranslation(key, language);
  });

  translatablePlaceholders.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = getTranslation(key, language);
  });

  translatableMetaContent.forEach((node) => {
    const key = node.dataset.i18nContent;
    node.setAttribute("content", getTranslation(key, language));
  });

  navToggle?.setAttribute("aria-label", getTranslation("aria.menu", language));
  languageToggle?.setAttribute(
    "aria-label",
    getTranslation("aria.language", language)
  );

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === language);
  });

  localStorage.setItem("portfolio-language", language);
  formNote.textContent = "";
}

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

languageToggle?.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "tr" ? "en" : "tr";
  applyTranslations(nextLanguage);
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
      formNote.textContent = getTranslation("form.error");
      return;
    }

    formNote.textContent = getTranslation("form.success");
    contactForm.reset();
  });
}

applyTranslations(currentLanguage);
