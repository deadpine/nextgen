interface TagProps {
  text: string
  color?: string
  rotate?: 'left' | 'right' | `${number}deg` // custom degrees like '7deg', '-3deg'
  className?: string
}

export default function Tag({ text, color = 'bg-green-500 text-white', rotate, className }: TagProps) {
  let rotationClass = ''

  if (rotate === 'left') {
    rotationClass = '-rotate-[3deg]'
  } else if (rotate === 'right') {
    rotationClass = 'rotate-[3deg]'
  } else if (rotate?.endsWith('deg')) {
    rotationClass = `rotate-[${rotate}]`
  }

  return (
    <p className={`w-fit px-4 py-2 text-sm font-medium tracking-tight ${color} ${className} ${rotationClass}`}>
      {text}
    </p>
  )
}