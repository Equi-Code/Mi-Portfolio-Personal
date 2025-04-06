document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const langSelect = document.getElementById("language-select");

    // === TEXTOS EN CADA IDIOMA ===
    const texts = {
        es: {
            sobreMi: "Sobre mí",
            experiencia: "Experiencia Laboral",
            estudios: "Estudios",
            proyectos: "Proyectos",
            toggleDark: "Modo Oscuro",
            toggleLight: "Modo Claro",
            descripcion: "Soy un desarrollador web con pasión por crear experiencias digitales modernas.",
            experienciaTexto: "Trabajé como desarrollador en varias empresas, enfocado en front-end y diseño responsivo.",
            estudiosTexto: "Licenciado en Informática - Universidad Ficticia, 2022.",
            proyectosTexto: "Aquí algunos de mis proyectos destacados:",
        },
        en: {
            sobreMi: "About Me",
            experiencia: "Work Experience",
            estudios: "Education",
            proyectos: "Projects",
            toggleDark: "Dark Mode",
            toggleLight: "Light Mode",
            descripcion: "I'm a web developer passionate about building modern digital experiences.",
            experienciaTexto: "Worked as a developer at several companies, focused on front-end and responsive design.",
            estudiosTexto: "B.Sc. in Computer Science - Fictional University, 2022.",
            proyectosTexto: "Here are some of my highlighted projects:",
        },
    };

    // === CARGAR PREFERENCIAS GUARDADAS ===
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedLang = localStorage.getItem("lang") || "es";

    // Aplicar tema
    if (savedTheme === "light") {
        body.classList.add("light");
    }

    // Aplicar idioma
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    // === CAMBIO DE TEMA ===
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light");
        const isLight = body.classList.contains("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        updateThemeButtonText(langSelect.value);
    });

    // === CAMBIO DE IDIOMA ===
    langSelect.addEventListener("change", () => {
        const lang = langSelect.value;
        localStorage.setItem("lang", lang);
        applyLanguage(lang);
        updateThemeButtonText(lang);
    });

    // === ACTUALIZAR TEXTOS SEGÚN IDIOMA ===
    function applyLanguage(lang) {
        // Navegación y títulos principales
        document.querySelector('nav a[href="#sobre-mi"]').textContent = texts[lang].sobreMi;
        document.querySelector('nav a[href="#experiencia"]').textContent = texts[lang].experiencia;
        document.querySelector('nav a[href="#estudios"]').textContent = texts[lang].estudios;
        document.querySelector('nav a[href="#proyectos"]').textContent = texts[lang].proyectos;

        document.querySelector('#sobre-mi h2').textContent = texts[lang].sobreMi;
        document.querySelector('#experiencia h2').textContent = texts[lang].experiencia;
        document.querySelector('#estudios h2').textContent = texts[lang].estudios;
        document.querySelector('#proyectos h2').textContent = texts[lang].proyectos;

        // Traducción de todos los elementos con data-key
        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            if (texts[lang][key]) {
                el.textContent = texts[lang][key];
            }
        });

        updateThemeButtonText(lang);
    }

    // === ACTUALIZAR TEXTO DEL BOTÓN DE TEMA SEGÚN ESTADO ===
    function updateThemeButtonText(lang) {
        const isLight = body.classList.contains("light");
        themeToggle.textContent = isLight ? texts[lang].toggleDark : texts[lang].toggleLight;
    }
});

// Scroll suave al hacer clic en "scroll-down"
document.addEventListener("DOMContentLoaded", () => {
    const scrollDown = document.querySelector(".scroll-down");
    if (scrollDown) {
        scrollDown.addEventListener("click", () => {
            document.getElementById("main-content").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});



