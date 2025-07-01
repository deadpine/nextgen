import Image from 'next/image';

interface DividerProps {
  bgColor?: string;
  children?: React.ReactNode
}

export default function Divider({ children, bgColor = "" }: DividerProps) {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className='w-full max-w-7xl py-24 px-5 mx-auto grid md:grid-cols-3 gap-6'>
        <Image src="/images/ic-star.svg" alt="tiny star" width={14} height={14} 
          className="max-h-3 my-4" />
        <h3 className="col-span-2">{children}</h3>
      </div>
    </div>
  );
} 