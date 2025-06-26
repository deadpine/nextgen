import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-6 py-6 border-t border-gray-500">
      
      <div>
        <Image src="/images/arrow-down.svg" alt="Arrow down" width={20} height={20} className="mb-2" />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      </div>

      <div className="w-full min-h-50 flex flex-col items-center justify-center relative">
        <Image 
          src={image} 
          alt={image}  
          width={120} 
          height={0} 
          className="h-auto"
        />
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
} 