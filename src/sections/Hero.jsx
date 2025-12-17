import { useRef } from 'react';
import { AnimatedTextLine } from '../components/AnimatedTextLine';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatedHeaderSection } from '../components/AnimatedHeaderSection';

const Hero = () => {
    // Actualizamos el texto para resaltar que ya terminaste la carrera (Egresado)
    // y que tu disponibilidad es inmediata para la práctica.
    const text = `Egresado de Ingeniería Informática especializado en Front-end y SQL.
                  Combino técnica con responsabilidad y motivación 
                  para desarrollarme en la industria tecnológica.`;
  
    return (
        <section id="inicio" className='flex flex-col justify-end min-h-screen bg-white'> 
            <AnimatedHeaderSection 
                // "Egresado" suena mucho más potente que "Estudiante".
                // Indica que ya tienes todo el conocimiento teórico necesario.
                subTitle={"Ingeniero Informático | Desarrollador Junior"}
                
                title={"Sebastián Almonacid "} 
                
                text={text}
                textColor={"text-black"}
            />
        </section>
    
    

  )
}
    
export default Hero