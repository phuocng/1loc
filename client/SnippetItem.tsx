import React, { useEffect, useRef } from 'react';

import Markdown from './Markdown';
import { Snippet } from './snippets';

interface SnippetItemProps {
    snippet: Snippet;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ snippet }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    const formatName = (name: string) => capitalize(name.split('-').join(' '));

    const toggle = () => {
        const contentEle = contentRef.current;
        contentEle && contentEle.classList.toggle('hidden');
    };

    const anchor = (str: string) => str.toLowerCase().split(' ').join('');

    const id = anchor(snippet.name);

    useEffect(() => {
        const hash = location.hash ? location.hash.substr(1) : '';
        if (hash === id) {
            const container = containerRef.current;
            container.scrollIntoView();
            // Auto expand
            toggle();
        }
    }, []);

    return (
        <div className='pt-2 mb-1' id={id} ref={containerRef}>
            <div className='border border-gray-400'>
                <h2 className='cursor-pointer py-1 px-2 bg-gray-100 flex justify-between group' onClick={toggle}>
                    {formatName(snippet.name)}
                    <a href={`#${id}`}>#</a>
                </h2>
                <div ref={contentRef} className='hidden border-t border-gray-400 text-sm'>
                    <Markdown content={snippet.body} />
                </div>
            </div>
        </div>
    );
};

export default SnippetItem;
