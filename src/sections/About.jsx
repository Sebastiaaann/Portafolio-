import { useRef } from "react";
import { AnimatedHeaderSection } from "../components/AnimatedHeaderSection";
import { AnimatedTextLine } from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Con ganas de seguir construyendo experiencias de webs modernas
    motivacion para aprender y crecer en el área tecnológica.`;
  const aboutText = `Egresado de Ingeniería Informática con especialización en Front-end (React) y competencias sólidas en Backend y Análisis de Datos. Combino mi formación técnica con una fuerte ética de trabajo, responsabilidad y motivación para seguir desarrollándome dentro de la industria tecnológica.
  Mis habilidades:
💻 Frontend: HTML, CSS, JavaScript, React
⚙️ Backend: Python, Django, SQL
📈 Herramientas: Git, GitHub, Power BI
🚀 En constante aprendizaje sobre testing y debugging`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="Sobre mí" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Desarrollador Junior | Próximo a práctica profesional"}
        title={"Sobre mí"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="/assets/logos/logoFTSR.svg"
          alt="Developer profile"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLine text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;