import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { Calendar, Users } from "lucide-react"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start">
      
      <section className="w-full max-w-7xl mx-auto py-40">
        <p>Onboarding</p>
        <p>→ Unlock</p>
        <h1>
          Comienza una nueva etapa: equipo de primos como next gen
        </h1>
        <p>
          El contexto puede ser impulso o ancla. Por eso, vamos a generar experiencias en torno a tres niveles: decisiones, acuerdos y liderazgos.
        </p>
      </section>
      
      <section className="w-full max-w-7xl mx-auto py-40">
        <div className="flex gap-6">
          <div className="w-full">
            <p>¿Cómo?</p>
            <p>Mediante dos formatos complementarios:</p>
          </div>
          <Card
            title="Bootcamps"
            image="/images/bootcamps.png"
            description="Entrenamientos para activar habilidades en torno a la negociación, la gestión patrimonial y la gobernanza. "
            participants="Equipo de primos"
          />
          <Card
            title="Skill labs"
            image="/images/skill-labs.png"
            description="Espacios para romper esquemas, desafiar perspectivas, provocar ideas y ganar herramientas."
            participants="Equipo de primos + Invitados"
          />
        </div>
      </section>

      <Divider 
        quote="[ Lo importante no es saber todo, sino desarrollar las herramientas para crecer en cada rol que elijamos habitar ]"
      />

      <section className="w-full max-w-7xl mx-auto py-40">
        <p>¿Qué van a encontrar?</p>
        <div className="flex gap-6">
          <Card
            title="Herramientas"
            image="/images/herramientas.png"
            description="Contenido personalizado, anclado en desafíos reales, para leer contextos y decidir cómo y cuándo involucrarse."
          />
          <Card
            title="Experiencias"
            image="/images/experiencias.png"
            description="Diseñadas por referentes para despertar miradas, preguntas y curiosidad que generen movimiento."
          />
          <Card
            title="Pertenencia"
            image="/images/pertenencia.png"
            description="Espacios de aprendizaje compartidos para potenciar el equipo de primos y generar comunidad con pares."
          />
        </div>
        <div className="grid grid-cols-3 gap-6 pt-40">
          <Image 
            src="/images/circles.png"
            alt="concentric circles illustration"  
            width={240} 
            height={0} 
            className="h-auto"
          />
          <h3 className="col-span-2">
            gestión patrimonial / adaptabilidad / comunicación asertiva / construcción de acuerdos / roles de directorio / conciencia negociación / emocional / creatividad / gestión riesgos / empatía / escucha activa / humildad cognitiva / gobernanza / liderazgo colaborativo / propósito y creación de valor / mentalidad infinita / gestión de la incertidumbre / diseño de portfolio / pensamiento sistémico / elección asesores / mandatos de inversión / objetivos financieros / estructura family office / manejo de expectativas
          </h3>
        </div>
      </section>

      <Divider 
        quote="[Cuando las ideas se cruzan con miradas distintas, el aprendizaje se vuelve real y aparece el valor]"
      />

      <section className="w-full max-w-7xl mx-auto py-40 grid grid-cols-3 gap-6">
        
        <div className="">
          <p>Estamos diseñando la primera experiencia → </p>
          <p>Más adelante les vamos a compartir más información</p>
        </div>
        <div className="border border-gray-500 rounded-3xl p-6">
          <h3>[Bootcamp #1] → Gestión Patrimonial</h3>
          <p>Tomar decisiones también implica saber negociar: con otros, con uno mismo, y con el contexto.</p>
          <p>Septiembre - Octubre</p>
          <p>3 encuentros: 1 presencial + 2 virtuales</p>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Septiembre - Octubre</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>3 encuentros: 1 presencial + 2 virtuales</span>
          </div>
        </div>
        <div className="bg-gray-200 rounded-3xl p-6">
          <h4>Coordinemos fechas:</h4>
          
        </div>
      </section>
      
    </main>
  );
}
