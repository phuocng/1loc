import React, { useRef } from 'react';

import Markdown from './Markdown';
import { Snippet } from './snippets';

interface SnippetItemProps {
    snippet: Snippet;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ snippet }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    const formatName = (name: string) => capitalize(name.split('-').join(' '));

    const toggle = () => {
        const contentEle = contentRef.current;
        if (!contentEle) {
            return;
        }
        contentEle.classList.toggle('hidden');
    };

    return (
        <div className='border border-gray-400'>
            <h2 className='cursor-pointer p-2 text-xl' onClick={toggle}>
                {formatName(snippet.name)}
            </h2>
            <div ref={contentRef} className='hidden border-t border-gray-400'>
                <Markdown content={snippet.body} />
            </div>
        </div>
    );
};

export default SnippetItem;
