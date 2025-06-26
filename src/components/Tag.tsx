interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <p className="w-fit text-sm font-medium px-4 py-2 bg-green-500 text-white">
      {text}
    </p>
  );
} 