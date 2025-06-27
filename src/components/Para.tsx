interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <h3 className="pb-4 md:pb-0">
      <i className="pr-2 font-light text-gray-500">
        para
      </i>
      {text}
    </h3>
  );
} 