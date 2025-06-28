import Image from 'next/image'
import { Users } from 'lucide-react'

interface CardProps {
  title: string
  image: string
  number?: string
  participants?: string
  imgClass?: string
  children?: React.ReactNode
}

export default function Card({ title, image, number, participants, children, imgClass }: CardProps) {
  return (
    <div className="w-full flex flex-col gap-1 pt-6 border-t border-gray-200 overflow-hidden">
      <div>
        {number !== undefined ? (
          <h2>{number}</h2>
        ) : (
          <Image src="/images/ic-arrow-down.svg" alt="Arrow down" width={22} height={22} />
        )}
        <h2>{title}</h2>
      </div>

      <div className="w-full min-h-50 md:min-h-60 flex flex-col items-center justify-center relative">
        <Image
          src={image}
          alt={image}
          width={120}
          height={120}
          className={`h-auto mix-blend-multiply ${imgClass}`}
        />
      </div>

      {children && <div>{children}</div>}

      {participants && (
        <div className="flex items-center gap-3 text-green-500 pt-3">
          <Users className="w-3.5 h-3.5" />
          <p className="text-green-500">{participants}</p>
        </div>
      )}
    </div>
  )
}
