interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <p className="w-fit text-sm px-3 py-2 bg-[#EAE3CC]">
      {text}
    </p>
  );
} 