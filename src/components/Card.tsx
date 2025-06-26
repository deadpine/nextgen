import Image from 'next/image';
import { Users } from "lucide-react"

interface CardProps {
  title: string;
  image: string;
  description: string;
  participants?: string;
}

export default function Card({ title, image, description, participants }: CardProps) {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-1 pt-6 border-t border-gray-200">
      
      <Image src="/images/ic-arrow-down.svg" alt="Arrow down" width={20} height={20} />
      <h2>{title}</h2>

      <div className="w-full min-h-64 flex flex-col items-center justify-center relative">
        <Image 
          src={image} 
          alt={image}  
          width={120} 
          height={0} 
          className="h-auto mix-blend-multiply"
        />
      </div>
      <p>{description}</p>
      {participants && (
        <div className="flex items-center gap-2 text-green-500 pt-3">
          <Users className="w-3.5 h-3.5" />
          <p className="text-green-500">{participants}</p>
        </div>
      )}
    </div>
  );
} 