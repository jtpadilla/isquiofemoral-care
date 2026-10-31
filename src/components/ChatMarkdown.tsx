import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const COMPONENTS: Components = {
  h1: ({ children }) => <h3 className="text-sm font-bold text-slate-900 mt-4 mb-2 first:mt-0">{children}</h3>,
  h2: ({ children }) => <h3 className="text-sm font-bold text-slate-900 mt-4 mb-2 first:mt-0">{children}</h3>,
  h3: ({ children }) => <h4 className="text-xs font-bold text-slate-900 mt-3 mb-1.5 first:mt-0">{children}</h4>,
  h4: ({ children }) => <h5 className="text-xs font-semibold text-slate-900 mt-3 mb-1 first:mt-0">{children}</h5>,
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-5 mb-2 last:mb-0 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 last:mb-0 space-y-1">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-cyan-700 hover:text-cyan-800 underline">
      {children}
    </a>
  ),
  blockquote: ({ children }) => <blockquote className="border-l-2 border-slate-300 pl-3 my-2 text-slate-600">{children}</blockquote>,
  hr: () => <hr className="my-3 border-slate-200" />,
  code: ({ children }) => <code className="font-mono text-[11px] bg-slate-200/60 rounded px-1 py-0.5">{children}</code>,
  pre: ({ children }) => <pre className="my-2 overflow-x-auto [&>code]:block [&>code]:p-2">{children}</pre>,
  table: ({ children }) => (
    <div className="my-2 overflow-x-auto">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="border border-slate-200 bg-slate-100 px-2 py-1 font-semibold text-slate-900">{children}</th>,
  td: ({ children }) => <td className="border border-slate-200 px-2 py-1 align-top">{children}</td>,
};

// Las imágenes se descartan: la respuesta del modelo no debe poder cargar recursos externos
export const ChatMarkdown: React.FC<{ text: string }> = ({ text }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={COMPONENTS} disallowedElements={['img']}>
    {text}
  </ReactMarkdown>
);
