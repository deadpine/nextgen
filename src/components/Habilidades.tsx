import React from 'react'

interface HabilidadesProps {
  items: string[];
}

export default function Habilidades({ items }: HabilidadesProps) {
  return (
    <div className="col-span-2 border-t border-gray-200 pt-8">
      <h4 className="flex flex-wrap gap-x-1 gap-y-1 break-words">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < items.length - 1 && (
              <span className="text-gray-200 px-2">/</span>
            )}
          </React.Fragment>
        ))}
      </h4>
    </div>
  );
}
