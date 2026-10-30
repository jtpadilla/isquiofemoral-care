import React from 'react';

interface Props {
  text: string;
  strongClassName?: string;
}

// Muestra el contenido de spec.md, donde **texto** significa negrita
export const RichText: React.FC<Props> = ({ text, strongClassName }) => (
  <>
    {text.split('**').map((part, index) =>
      index % 2 === 1 ? <strong key={index} className={strongClassName}>{part}</strong> : part
    )}
  </>
);
