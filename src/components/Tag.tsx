interface TagProps {
  text: string;
  className?: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <p className="w-fit text-sm px-3 py-2 bg-green-500 text-white">
      {text}
    </p>
  );
} 