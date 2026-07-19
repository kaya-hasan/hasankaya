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
    "meta.title": "Hasan Kaya | Python Backend Developer",
    "meta.description":
      "Hasan Kaya'nin Python Backend Developer olarak Django, FastAPI, PostgreSQL, REST API, ERP ve CRM odakli business applications gelistirdigi profesyonel portfolyo sitesi.",
    "nav.projects": "Seçili Projeler",
    "nav.services": "Uzmanlık Alanları",
    "nav.about": "Hakkımda",
    "nav.contact": "İletişim",
    "hero.eyebrow": "Python Backend Developer",
    "hero.title": "ERP, CRM ve operasyon süreçleri için backend sistemleri geliştiriyorum",
    "hero.subtitle":
      "Python, Django, FastAPI, PostgreSQL ve REST API mimarileriyle business applications geliştiriyorum. Odağım, ERP, CRM ve operasyonel yazılımlar için ürün seviyesinde backend sistemleri kurmak.",
    "hero.ctaProjects": "Seçili Projeleri İncele",
    "hero.ctaContact": "İletişime Geç",
    "hero.point1": "Python, Django, FastAPI ve PostgreSQL",
    "hero.point2": "Business applications için REST API tasarımı",
    "hero.point3": "ERP, CRM ve operasyonel ürün geliştirme",
    "hero.summaryChip": "Odak Alanı",
    "hero.summaryTitle": "Ürün bağlamı olan backend mimarileri",
    "hero.summaryText":
      "Veri modeli, iş akışı, API tasarımı ve operasyonel gereksinimleri sürdürülebilir business applications içinde bir araya getiren sistemler üzerinde çalışıyorum.",
    "hero.metric1Strong": "Backend",
    "hero.metric1Text": "Python, Django, FastAPI",
    "hero.metric2Strong": "Data",
    "hero.metric2Text": "PostgreSQL ve REST API",
    "hero.metric3Strong": "Domain",
    "hero.metric3Text": "ERP, CRM, Operasyon",
    "hero.metric4Strong": "Delivery",
    "hero.metric4Text": "Ürün yaklaşımıyla iş uygulamaları",
    "projects.eyebrow": "Seçili Projeler",
    "projects.title": "Backend ve business application projeleri",
    "projects.text":
      "CRM, ERP, randevu, stok ve operasyonel yazılım tarafında geliştirdiğim ürün ve platform çalışmalarından seçilmiş örnekler.",
    "projects.clienthub.text":
      "ClientHub, müşteri kayıtlarını, geri kazanım süreçlerini ve ekip aktivite takibini tek bir CRM yapısında toplayarak günlük follow-up operasyonlarını daha görünür ve yönetilebilir hale getirmek için geliştirildi.",
    "projects.clienthub.feature1": "Müşteri takibi",
    "projects.clienthub.feature2": "Geri kazanım süreçleri",
    "projects.clienthub.feature3": "Aktivite yönetimi",
    "projects.appointly.text":
      "Appointly, hizmet ekipleri için çakışma kontrollü planlama, müşteri bağlantısı ve daha düzenli rezervasyon akışı sağlamak amacıyla geliştirilen bir randevu yönetim ürünüdür.",
    "projects.appointly.feature1": "Randevu planlama",
    "projects.appointly.feature2": "Saat çakışma kontrolü",
    "projects.appointly.feature3": "Müşteri bağlantısı",
    "projects.lolchamps.text":
      "LoLChamps, API ile beslenen veriyi listeleme, arama ve filtreleme deneyimi etrafında kurgulanan; temiz veri tüketimi ve düzenli arayüz yapısını göstermek için geliştirilen bir uygulamadır.",
    "projects.lolchamps.feature1": "Listeleme",
    "projects.lolchamps.feature2": "Arama ve filtreleme",
    "projects.lolchamps.feature3": "API entegrasyonu",
    "projects.inventory.text":
      "Hasankaya Inventory, ürün kayıtlarını ve stok hareketlerini yapılandırılmış CRUD akışıyla yöneterek operasyonel envanter süreçlerini daha kontrollü ve genişletilebilir hale getirmek için geliştirildi.",
    "projects.inventory.feature1": "Stok takibi",
    "projects.inventory.feature2": "Ürün yönetimi",
    "projects.inventory.feature3": "CRUD işlemleri",
    "projects.salefollowup.text":
      "sale_followup, Odoo 18.0 teklif süreçlerine takip alanları, durum otomasyonu, cron tabanlı güncellemeler ve filtreleme mantığı ekleyerek satış operasyonlarını daha düzenli yönetmek için geliştirildi.",
    "projects.salefollowup.feature1": "Takip alanları",
    "projects.salefollowup.feature2": "Otomatik durum hesaplama",
    "projects.salefollowup.feature3": "Günlük cron güncellemesi",
    "certificates.eyebrow": "Yeterlilikler",
    "certificates.title": "Sertifikalar ve eğitimler",
    "certificates.text": "En güncelden eskiye doğru sıralanmış sertifikalar.",
    "services.eyebrow": "Uzmanlık Alanları",
    "services.title": "Backend ve business software yetkinlikleri",
    "services.crm.title": "CRM Solutions",
    "services.crm.text":
      "Müşteri yaşam döngüsü görünürlüğü, follow-up yönetimi ve daha temiz iç iş akışları etrafında tasarlanan CRM sistemleri.",
    "services.appointment.title": "Backend API Development",
    "services.appointment.text":
      "Ürün özellikleri, entegrasyonlar ve internal platformlar için Python, FastAPI ve Django ile geliştirilen REST API servisleri.",
    "services.custom.title": "ERP and Business Applications",
    "services.custom.text":
      "Veri yapısı, süreç mantığı ve sürdürülebilirlik odağıyla şekillenen ERP genişletmeleri, operasyon araçları ve business applications.",
    "about.eyebrow": "Hakkımda",
    "about.title": "Backend sistemleri iş akışı, veri ve ürün uyumu etrafında kuruyorum",
    "about.text":
      "Operasyonel netlik, sürdürülebilir sistem tasarımı ve business applications ihtiyacı olan ekipler için Python backend geliştirmeye odaklanıyorum.",
    "about.cardText":
      "Çalışmalarım backend engineering, ERP ve CRM iş akışları ile operasyonel ürün geliştirme kesişiminde yer alıyor. API tasarımı, PostgreSQL tabanlı veri modelleme, süreç odaklı mimari ve internal tool seviyesinden production-ready business product seviyesine çıkabilen yazılımlarda en yüksek etkiyi üretiyorum.",
    "contact.eyebrow": "İletişim",
    "contact.title": "Ürün veya backend kapsamını birlikte netleştirelim",
    "contact.text":
      "ERP extension, CRM workflow, REST API veya Python backend system geliştiriyorsanız kısa bir özet paylaşın; kapsamı birlikte değerlendirelim.",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "ornek@mail.com",
    "contact.messageLabel": "Mesaj",
    "contact.messagePlaceholder": "Kapsamı kısaca yazın",
    "contact.submit": "Gönder",
    "footer.copy":
      "Hasan Kaya • Python Backend Developer • Django, FastAPI, PostgreSQL, REST API",
    "common.demo": "Demo",
    "form.error": "Lütfen email ve mesaj alanını doldurun.",
    "form.success": "Mesajınız alındı. Uygun olduğumda geri dönüş yapabilirim.",
    "aria.menu": "Menüyü aç",
    "aria.language": "Dil değiştir",
  },
  en: {
    "meta.title": "Hasan Kaya | Python Backend Developer",
    "meta.description":
      "Professional portfolio of Hasan Kaya, a Python Backend Developer building business applications with Django, FastAPI, PostgreSQL, REST API, ERP, and CRM systems.",
    "nav.projects": "Selected Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Python Backend Developer",
    "hero.title": "Backend systems for ERP, CRM, and business operations",
    "hero.subtitle":
      "I build business applications with Python, Django, FastAPI, PostgreSQL, and REST API architectures. My focus is product-ready backend systems for ERP, CRM, and operational software.",
    "hero.ctaProjects": "View Selected Work",
    "hero.ctaContact": "Start a Conversation",
    "hero.point1": "Python, Django, FastAPI, and PostgreSQL",
    "hero.point2": "REST API design for business applications",
    "hero.point3": "ERP, CRM, and operational product development",
    "hero.summaryChip": "Core Focus",
    "hero.summaryTitle": "Backend architecture with product context",
    "hero.summaryText":
      "I work on systems that connect data models, workflows, API design, and operational requirements into maintainable business software.",
    "hero.metric1Strong": "Backend",
    "hero.metric1Text": "Python, Django, FastAPI",
    "hero.metric2Strong": "Data",
    "hero.metric2Text": "PostgreSQL and REST API",
    "hero.metric3Strong": "Domain",
    "hero.metric3Text": "ERP, CRM, Operations",
    "hero.metric4Strong": "Delivery",
    "hero.metric4Text": "Business applications with product thinking",
    "projects.eyebrow": "Selected Work",
    "projects.title": "Backend and business application projects",
    "projects.text":
      "A selection of product and platform work across CRM, ERP, scheduling, inventory, and operational software.",
    "projects.clienthub.text":
      "ClientHub centralizes customer records, recovery workflows, and team activity tracking in a CRM product built to streamline daily follow-up and operational visibility.",
    "projects.clienthub.feature1": "Customer tracking",
    "projects.clienthub.feature2": "Recovery workflows",
    "projects.clienthub.feature3": "Activity management",
    "projects.appointly.text":
      "Appointly was designed to manage appointment operations with conflict-aware scheduling, customer linkage, and a cleaner booking flow for service-based teams.",
    "projects.appointly.feature1": "Appointment scheduling",
    "projects.appointly.feature2": "Time conflict control",
    "projects.appointly.feature3": "Customer connection",
    "projects.lolchamps.text":
      "LoLChamps was built as an API-driven interface for listing, searching, and filtering champion data while demonstrating clean data consumption and responsive UI structure.",
    "projects.lolchamps.feature1": "Champion listing",
    "projects.lolchamps.feature2": "Search and filtering",
    "projects.lolchamps.feature3": "API integration",
    "projects.inventory.text":
      "Hasankaya Inventory manages product records and stock movement through a structured CRUD workflow created to make inventory operations easier to control and extend.",
    "projects.inventory.feature1": "Stock tracking",
    "projects.inventory.feature2": "Product management",
    "projects.inventory.feature3": "CRUD operations",
    "projects.salefollowup.text":
      "sale_followup extends Odoo 18.0 quotation workflows with follow-up fields, status automation, cron-based updates, and filtering logic built for sales operations.",
    "projects.salefollowup.feature1": "Tracking fields",
    "projects.salefollowup.feature2": "Automatic status calculation",
    "projects.salefollowup.feature3": "Daily cron updates",
    "certificates.eyebrow": "Credentials",
    "certificates.title": "Certificates and training",
    "certificates.text": "Recent certifications listed from most recent to oldest.",
    "services.eyebrow": "Services",
    "services.title": "Backend and business software capabilities",
    "services.crm.title": "CRM Solutions",
    "services.crm.text":
      "CRM systems designed around customer lifecycle visibility, follow-up management, and cleaner internal workflows.",
    "services.appointment.title": "Backend API Development",
    "services.appointment.text":
      "REST API services built with Python, FastAPI, and Django for product features, integrations, and internal platforms.",
    "services.custom.title": "ERP and Business Applications",
    "services.custom.text":
      "ERP extensions, operational tooling, and business applications shaped by data structure, process logic, and maintainability.",
    "about.eyebrow": "About",
    "about.title": "I build backend systems around workflow, data, and product fit",
    "about.text":
      "I focus on Python backend development for teams that need structured business applications, operational clarity, and maintainable system design.",
    "about.cardText":
      "My work sits at the intersection of backend engineering, ERP and CRM workflows, and operational product development. I am most effective on systems that require API design, PostgreSQL-backed data modeling, process-aware architecture, and software that can move from internal tool to production-ready business product.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let’s discuss the product or backend scope",
    "contact.text":
      "If you are building an ERP extension, CRM workflow, REST API, or Python backend system, send a short brief and I can review the scope.",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "example@mail.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Briefly describe the scope",
    "contact.submit": "Send",
    "footer.copy":
      "Hasan Kaya • Python Backend Developer • Django, FastAPI, PostgreSQL, REST API",
    "common.demo": "Demo",
    "form.error": "Please fill in both the email and message fields.",
    "form.success": "Your message has been received. I can follow up when available.",
    "aria.menu": "Open menu",
    "aria.language": "Change language",
  },
};

let currentLanguage = localStorage.getItem("portfolio-language") || "en";

function getTranslation(key, language = currentLanguage) {
  return translations[language][key] || translations.en[key] || "";
}

function applyTranslations(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = getTranslation("meta.title", language);

  translatableNodes.forEach((node) => {
    node.textContent = getTranslation(node.dataset.i18n, language);
  });

  translatablePlaceholders.forEach((node) => {
    node.placeholder = getTranslation(node.dataset.i18nPlaceholder, language);
  });

  translatableMetaContent.forEach((node) => {
    node.setAttribute("content", getTranslation(node.dataset.i18nContent, language));
  });

  navToggle?.setAttribute("aria-label", getTranslation("aria.menu", language));
  languageToggle?.setAttribute("aria-label", getTranslation("aria.language", language));

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === language);
  });

  localStorage.setItem("portfolio-language", language);

  if (formNote) {
    formNote.textContent = "";
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navLinks.classList.toggle("is-open");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const targetId = item.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (target) {
      event.preventDefault();
      const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
      const topPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }

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
  { threshold: 0.15 }
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
