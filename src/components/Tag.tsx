interface TagProps {
  text: string;
  color?: string;
}

export default function Tag({ text, color = "bg-green-500 text-white"  }: TagProps) {
  return (
    <p className={`w-fit px-4 py-2 text-sm font-medium tracking-tight ${color}`}>
      {text}
    </p>
  );
} 