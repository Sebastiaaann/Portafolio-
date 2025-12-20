export const servicesData = [
    {
        title: "Desarrollo Frontend (En formación)",
        description:
            "Creación de interfaces web dinámicas y responsivas. En constante aprendizaje de buenas prácticas en React y diseño UI con CSS moderno.",
        items: [
            {
                title: "HTML5 & CSS3",
                description: "Estructura semántica y diseño moderno (Flexbox/Grid)."
            },
            {
                title: "JavaScript",
                description: "Manejo del DOM, funciones asíncronas y lógica de programación."
            },
            {
                title: "React.js",
                description: "Aprendiendo el ciclo de vida de componentes, Hooks (useState, useEffect) y Props."
            },
        ]
    },
    {
        title: "Backend & Datos (Básico)",
        description:
            "Comprensión de cómo se almacenan y consultan los datos detrás de las aplicaciones.",
        items: [
            {
                title: "Consultas SQL y manejo de BDD",
                description: "Consultas básicas, relaciones entre tablas y diseño de bases de datos simples."
            },
            {
                title: "Lógica de programación con Python",
                description: "Principios básicos de programación estructurada y orientación a objetos."
            },
            {
                title: "Consumo de APIs REST",
                description: "Interés en aprender consumo de APIs REST y conexión con servidores."
            },
        ]
    },
    {
        title: "Herramientas & Colaboración",
        description:
            "Uso de estándares de la industria para trabajar en equipo y mantener código ordenado.",
        items: [
            {
                title: "Git & GitHub",
                description: "Control de versiones, manejo de repositorios y flujo de trabajo básico (commits, push, pull)."
            },
            {
                title: "Debugging y Testing básico",
                description: "Uso de herramientas de desarrollo en navegadores y pruebas simples de funcionalidad."
            },
            {
                title: "Trabajo en equipo y proactividad",
                description: "Comunicación efectiva, revisión de código y disposición para aprender nuevas tecnologías."
            },
        ]
    },
]

export const projects = [
    {
        id: 1,
        name: "Proyecto de Titulo",
        description: "Aplicación clásica para gestión de tareas. Práctica de uso de Hooks (useState) y manipulación de arrays en tiempo real.",
        href: "https://fletes-m.vercel.app/",
        image: "/assets/projects/ptitulo.png",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "CSS Modules" }
        ]
    },
    {
        id: 2,
        name: "Proyecto E-Commerce Mockup",
        description: "Prototipo inspirado en mi experiencia en cocina (Marriott). Permite ingresar insumos y calcular costos básicos (CRUD simple).",
        href: "https://proyecto-e-commerce-swart.vercel.app/",
        image: "/assets/projects/p-ecommerce.png",
        bgImage: "",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Tailwind CSS" }
        ]
    },
    {
        id: 3,
        name: "Fletes-Don-Marcelo",
        description: "Este sitio web. Diseñado desde cero para mostrar mis habilidades y practicar diseño responsivo.",
        href: "https://fletesdonmarcelo.netlify.app/",
        image: "/assets/projects/p-fletesmarcelo.png",
        bgImage: "",
        frameworks: [
            { id: 1, name: "Astro" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Tailwind CSS" }
        ]
    },
    {
        id: 4,
        name: "Blog Personal",
        description: "Boceto de aplicación para control de acceso, aplicando conocimientos de seguridad física y bases de datos.",
        href: "https://algorithmlove.netlify.app/",
        image: "",
        bgImage: "",
        frameworks: [
            { id: 1, name: "Astro" },
            { id: 2, name: "JavaScript" },
            { id: 3, name: "Tailwind CSS" }
        ]
    }
]

export const socials = [
    {
        name: "GitHub",
        href: "https://github.com/Sebastiaaann"
    },
    {
        name: "Email",
        href: "mailto:sebastian.almo9@gmail.com"
    }
]