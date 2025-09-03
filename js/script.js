document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    const langSelect = document.getElementById("language-select");

    const texts = {
        es: {
            // Navbar & secciones
            navSobreMi: "Sobre mí",
            navExperiencia: "Experiencia",
            navEstudios: "Estudios",
            navProyectos: "Proyectos",

            holaSoy: "Hola, soy",
            saludo: "¡Bienvenidos a mi portfolio!",
            rol: "Desarrollador Web Frontend",
            descripcion: "Me apasiona crear interfaces modernas, intuitivas y escalables para brindar la mejor experiencia de usuario 🚀",
            explorar: "Explorar",

            sobreMi: "Sobre mí",
            aboutP1:
                "Soy un Desarrollador Front-End apasionado por transformar ideas en experiencias digitales únicas. Mi objetivo es crear sitios web modernos, accesibles y fáciles de usar, combinando creatividad con código limpio y funcional.",
            aboutP2:
                "Manejo con soltura tecnologías como HTML, CSS, JavaScript y frameworks modernos como React, Angular y Vue, lo que me permite adaptar cada proyecto a las necesidades específicas de mis clientes.",
            aboutP3:
                "Además, disfruto del aprendizaje continuo: siempre busco estar a la vanguardia de las tendencias en diseño web, UX/UI y desarrollo. Mi meta es construir experiencias digitales que conecten con las personas.",

            experiencia: "Experiencia",
            certificados: "Certificados",
            proyectos: "Proyectos",

            proyect:"Ver proyecto",

            proyect1:"Diseño y desarrollo de mi portfolio personal.",

            contactTitle: "¡Enviame un mensaje!",
            contactIntro: "¿Tenés una consulta o propuesta, o solo querés saludar? Adelante.",
            labelName: "Tu Nombre",
            labelEmail: "Correo electrónico",
            labelMessage: "Tu Mensaje",
            phName: "Ingresá tu nombre",
            phEmail: "Ingresá tu correo electrónico",
            phMessage: "Hola, me gustaría hablar sobre...",
            btnShoot: "ENVIAR →",

            rights: "Todos los derechos reservados.",
            notice:"| Aviso Legal |",
            followMe:"Seguime para ver mi día a día como desarrollador y tips de código.",


            toggleDark: "Modo Oscuro",
            toggleLight: "Modo Claro",

            noticeh1:"Aviso Legal",
            noticeh2:"1. Titularidad del sitio",
            noticeh3:"2. Propósito del sitio",
            noticeh4:"3. Derechos de autor",
            noticeh5:"4. Exención de responsabilidad",
            noticeh6:"5. Legislación aplicable",

            noticep1:"Este sitio web es propiedad de Ezequiel Riente, con domicilio en Ciudad Autonoma de Buenos Aires, Argentia.",
            noticep2:"El contenido de este sitio tiene fines informativos y/o demostrativos. En el caso de portafolio, los proyectos presentados son muestras de trabajos previos. En el caso de e-commerce, los productos ofrecidos se ajustan a las condiciones establecidas en los Términos y Condiciones.",
            noticep3:"Todos los contenidos, textos, imágenes y diseños presentes en este sitio son propiedad de Ezequiel Riente, salvo que se indique lo contrario. Queda prohibida su reproducción, distribución o modificación sin autorización expresa",
            noticep4:"El titular no se hace responsable de posibles errores en los contenidos ni del uso inadecuado que los usuarios puedan hacer de la información o los materiales del sitio.",
            noticep5:"Este Aviso Legal se rige por la legislación vigente en Argentina. En caso de controversia, será competente la jurisdicción de Ciudad Autonoma de Buenos Aires.",

            back:"← Volver al inicio",


        },

        en: {
            // Navbar & sections
            navSobreMi: "About Me",
            navExperiencia: "Experience",
            navEstudios: "Education",
            navProyectos: "Projects",

            holaSoy: "Hi, I'm",
            saludo: "Welcome to my portfolio!",
            rol: "Frontend Web Developer",
            descripcion: "I’m passionate about building modern, intuitive and scalable interfaces to deliver the best user experience 🚀",
            explorar: "Explore",

            sobreMi: "About Me",
            aboutP1:
                "I’m a Front-End Developer passionate about turning ideas into unique digital experiences. My goal is to build modern, accessible and easy-to-use websites, combining creativity with clean, maintainable code.",
            aboutP2:
                "I work confidently with HTML, CSS, JavaScript and modern frameworks like React, Angular and Vue, which lets me tailor each project to specific client needs.",
            aboutP3:
                "I enjoy continuous learning and stay up-to-date with Web, UX/UI and development trends. My aim is to craft digital experiences that truly connect with people.",

            experiencia: "Experience",
            certificados: "Certificates",
            proyectos: "Projects",


            proyect:"See Project",
            proyect1:"Design and development of my personal portfolio.",

            contactTitle: "Send me a message!",
            contactIntro: "Got a question or proposal, or just want to say hello? Go ahead.",
            labelName: "Your Name",
            labelEmail: "Email Address",
            labelMessage: "Your Message",
            phName: "Enter your name",
            phEmail: "Enter your email address",
            phMessage: "Hi, I think we need a design system...",
            btnShoot: "SHOOT →",

            rights: "All rights reserved.",
            notice:"| Legal Notice |",
            followMe:"Follow along to see my day-to-day life as a developer and coding tips.",

            toggleDark: "Dark Mode",
            toggleLight: "Light Mode",

            noticeh1:"Legal Notice",
            noticeh2:"1. Ownership of the site",
            noticeh3:"2. Purpose of the site",
            noticeh4:"3. Copyright",
            noticeh5:"4. Disclaimer",
            noticeh6:"5. Applicable legislation",

            noticep1:"This website is owned by Ezequiel Riente, domiciled in the Autonomous City of Buenos Aires, Argentina",
            noticep2:"The content of this site is for informational and/or demonstrative purposes only. In the case of a portfolio, the projects presented are samples of previous work. In the case of e-commerce, the products offered comply with the conditions established in the Terms and Conditions.",
            noticep3:"All content, text, images, and designs on this site are the property of Ezequiel Riente, unless otherwise indicated. Reproduction, distribution, or modification without express authorization is prohibited.",
            noticep4:"The owner is not responsible for any errors in the content or for any improper use that users may make of the information or materials on the site.",
            noticep5:"This Legal Notice is governed by the laws in force in Argentina. In the event of a dispute, the jurisdiction of the Autonomous City of Buenos Aires shall be competent.",

            back:"← Back to top",

        },
    };

    

    // Preferencias guardadas
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedLang = localStorage.getItem("lang") || "es";

    // Aplicar tema inicial
    if (savedTheme === "light") body.classList.add("light");

    // Aplicar idioma inicial
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    // Toggle de tema
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light");
        const isLight = body.classList.contains("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        updateThemeButtonText(langSelect.value);
    });

    // Cambio de idioma
    langSelect.addEventListener("change", () => {
        const lang = langSelect.value;
        localStorage.setItem("lang", lang);
        applyLanguage(lang);
    });

    // === Traducción con data-key (texto) y data-placeholder (placeholders) ===
    function applyLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            if (texts[lang][key]) {
                el.textContent = texts[lang][key];
            }
        });

        document.querySelectorAll("[data-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-placeholder");
            if (texts[lang][key]) {
                el.setAttribute("placeholder", texts[lang][key]);
            }
        });

        updateThemeButtonText(lang);
    }

    function updateThemeButtonText(lang) {
        const isLight = body.classList.contains("light");
        themeToggle.textContent = isLight ? texts[lang].toggleDark : texts[lang].toggleLight;
    }

    // (Opcional) Scroll suave para cualquier enlace hash
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
            const id = a.getAttribute("href").slice(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
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



