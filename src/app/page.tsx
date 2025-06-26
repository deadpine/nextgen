import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { Calendar, Users } from "lucide-react"
import Image from "next/image";
import DatesForm from "@/components/DatesForm";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start bg-cream-100">
      
      <section className="max-w-7xl mx-auto py-60">
        <div className="pb-4">
          <p>Onboarding</p>
          <p>→ Unlock</p>
          <h1 className="py-10">
            próxima etapa:<br/>
            equipo de primos como 
            <span className="pl-2 underline decoration-3 underline-offset-3">next gen</span>
          </h1>
        </div>
      </section>

      <section className="py-40 bg-[#F6FECD]">
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-6 items-center'>
          <Image 
            src="/images/arbol.png" 
            alt="Arrow down" 
            width={290} 
            height={0} 
            className="h-auto mx-12"
          />
          <div className="col-span-2 flex flex-col gap-12">
            <div>
              <p className="text-green-600 pb-3">¿Qué proponemos?</p>
              <h3>experiencias de aprendizaje diseñadas a medida</h3>
            </div>
            <div>
              <p className="text-green-600 pb-3">¿Para qué?</p>
              <h3>
                <i className="pr-2 font-light text-gray-500">para</i>
                tomar decisiones conscientes
              </h3>
              <h3>
                <i className="pr-2 font-light text-gray-500">para</i>
                construir identidad en contexto
              </h3>
              <h3>
                <i className="pr-2 font-light text-gray-500">para</i>
                potenciar vínculos basados en retos compartidos
              </h3>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-7xl mx-auto py-40">
        <div className="flex gap-6">
          <div className="w-full flex flex-col justify-between">
            <p>¿Cómo?</p>
            <p>Mediante dos formatos complementarios:</p>
            <div className="flex flex-col justify-end grow">
              <Tag text="anclaje en desafíos reales" />
              <Tag text="material curado disponible 24/7" />
              <Tag text="espacios virtuales" />
              <Tag text="encuentros presenciales"/>
            </div>
          </div>
          <Card
            title="Bootcamps"
            image="/images/bootcamps.png"
            description="Para seguir profundizando en lo compartido y activar habilidades en torno a cómo gestionarlo"
            participants="Equipo de primos"
          />
          <Card
            title="Skill labs"
            image="/images/skill-labs.png"
            description="Para romper esquemas, desafiar perspectivas, provocar ideas y ganar herramientas"
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
          <div>
            <Tag text="Habilidades" />
            <Tag text="Herramientas" />
            <Image 
              src="/images/circles.png"
              alt="concentric circles illustration"  
              width={240} 
              height={0} 
              className="h-auto"
            />
          </div>
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
          <Tag text="¿Y ahora qué?" />
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
        <DatesForm />
      </section>
      
    </main>
  );
}
