import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { Calendar, Pin } from "lucide-react"
import Image from "next/image";
import DatesForm from "@/components/DatesForm";
import Tag from "@/components/Tag";
import Para from "@/components/Para";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start bg-cream-100 space-y-10">
      
      <section className="grid md:grid-cols-2 gap-5 items-center">
        <div>
          <p className="text-lg font-medium text-cream-400 line-through">
            Onboarding
          </p>
          <p className="text-lg font-medium text-green-500 ">
            → Unlock: <i>el contexto puede ser impulso</i>
          </p>
          <h1 className="py-12">
            próxima etapa:<br/>
            equipo de primos como 
            <span className="pl-2 underline decoration-3 underline-offset-3">next gen</span>
          </h1>
        </div>
        <Image 
          src="/images/hero.png" 
          alt="cuatro personas caminando juntas" 
          width={500} 
          height={0} 
          className="w-120 max-w-fill h-auto mx-auto"
        />
      </section>

      <div className="w-full py-32 px-5 bg-green-100">
        <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center'>
          <Image 
            src="/images/arbol.png" 
            alt="Arrow down" 
            width={270} 
            height={0} 
            className="h-auto mix-blend-multiply hidden md:block"
          />
          <div className="col-span-2 space-y-12 flex flex-col items-center">
            <div className="w-full pr-4 md:pr-0">
              <p className="text-green-600 pb-3">¿Qué proponemos?</p>
              <h3>experiencias de aprendizaje diseñadas a medida</h3>
            </div>
            <Image 
              src="/images/arbol.png" 
              alt="tronco de un arbol" 
              width={270} 
              height={0} 
              className="max-w-[14rem] pb-5 h-auto mix-blend-multiply block md:hidden"
            />
            <div className="w-full">
              <p className="text-green-600 pb-3">¿Para qué?</p>
              <Para text="tomar decisiones conscientes" />
              <Para text="construir identidad en contexto" />
              <Para text="potenciar vínculos basados en retos compartidos" />
            </div>
          </div>
        </div>
      </div>
      
      <section>
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          <div className="w-full flex flex-col justify-between">
            <p>¿Cómo?</p>
            <p>Mediante dos formatos complementarios:</p>
            <div className="flex flex-col justify-end grow">
              <Tag 
                text="anclaje en desafíos reales"
                color="bg-green-500 text-white" 
                rotate="left"
              />
              <Tag 
                text="material curado disponible 24/7"
                color="bg-green-100" 
                rotate="2deg"
              />
              <Tag 
                text="espacios virtuales"
                color="bg-cream-100 text-green-500 border border-green-500" 
                rotate="left"
              />
              <Tag 
                text="encuentros presenciales"
                color="bg-red-500 text-white" 
                rotate="1deg"
              />
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
        bgColor="bg-cream-300"
        quote="[ Lo importante no es saber todo, sino desarrollar las herramientas para crecer en cada rol que elijamos habitar ]"
      />

      <section>
        <p>¿Qué van a encontrar?</p>
        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
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
        <div className="grid md:grid-cols-3 gap-6 pt-40">
          <div className="w-full h-full pr-10 flex flex-col">
            <Tag
              text="Habilidades"
              rotate="left"
              className="z-10"
            />          
            <Image
              src="/images/circles.png"
              alt="concentric circles illustration"
              width={310} 
              height={310} 
              className="-my-10"
            />
            <Tag
              text="Herramientas"
              color="bg-green-100"
              rotate="right"
              className="z-10 ml-auto mr-12"
            />
          </div>
          <div className="col-span-2 border-t border-gray-200">
            <h3>
              gestión patrimonial / adaptabilidad / comunicación asertiva / construcción de acuerdos / roles de directorio / conciencia negociación / emocional / creatividad / gestión riesgos / empatía / escucha activa / humildad cognitiva / gobernanza / liderazgo colaborativo / propósito y creación de valor / mentalidad infinita / gestión de la incertidumbre / diseño de portfolio / pensamiento sistémico / elección asesores / mandatos de inversión / objetivos financieros / estructura family office / manejo de expectativas
            </h3>
          </div>
        </div>
      </section>

      <Divider 
        bgColor="bg-green-100"
        quote="[Cuando las ideas se cruzan con miradas distintas, el aprendizaje se vuelve real y aparece el valor]"
      />

      <section className="grid md:grid-cols-3 gap-6">
        
        <div>
          <Tag 
            text="¿Y ahora qué?"
            color="bg-red-500 text-white"  
            rotate="left"
          />
          <p>Estamos diseñando la primera experiencia → </p>
          <p>Más adelante les vamos a compartir más información</p>
        </div>

        <div className="border border-gray-500 rounded-3xl p-6 flex flex-col gap-4">
          <h3 className="leading-none">
            [Bootcamp #1] <br/>
            → Gestión Patrimonial
          </h3>
          <div className="max-w-fill min-h-40 flex flex-col items-center justify-center relative">
            <Image 
              src="/images/arbol.png" 
              alt="alt"
              width={120} 
              height={0} 
              className="w-100 max-w-fill h-auto mix-blend-multiply"
            />
          </div>
          <p>
            Tomar decisiones también implica saber negociar: con otros, con uno mismo, y con el contexto.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <p className="text-gray-700">Septiembre - Octubre</p>
            </div>
            <div className="flex items-center gap-2">
              <Pin className="w-4 h-4" />
              <p className="text-gray-700">3 encuentros: 1 presencial + 2 virtuales</p>
            </div>
          </div>
        </div>
        <DatesForm />
      </section>
      
    </main>
  );
}
