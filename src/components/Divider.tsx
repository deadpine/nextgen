import Image from 'next/image';

interface DividerProps {
  quote: string;
}

export default function Divider({ quote }: DividerProps) {
  return (
    <section className="w-full py-24 bg-[#EAE3CC]">
      <div className='w-full max-w-7xl mx-auto grid grid-cols-3 gap-6'>
        <Image src="/images/arrow-down.svg" alt="Arrow down" width={20} height={20} 
          className="max-h-4" />
        <h2 className="text-sm col-span-2">{quote}</h2>
      </div>
    </section>
  );
} 