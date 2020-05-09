import React, { useEffect, useRef } from 'react';

import anchor from './helpers/anchor';
import formatName from './helpers/formatName';
import Markdown from './Markdown';
import { Snippet } from './snippets';

interface SnippetItemProps {
    snippet: Snippet;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ snippet }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const toggle = () => {
        const contentEle = contentRef.current;
        contentEle && contentEle.classList.toggle('hidden');
    };

    const id = anchor(snippet.name);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = location.hash ? location.hash.substr(1) : '';
            if (hash === id) {
                const contentEle = containerRef.current;
                if (!contentEle) {
                    return;
                }
                // 60 is the height of the sticky header
                const top = contentEle.getBoundingClientRect().top + window.pageYOffset - 60;
                window.scrollTo(0, top);
                // Auto expand
                toggle();
            }
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className='pt-2 mb-1' id={id} ref={containerRef}>
            <div className='border border-gray-400'>
                <h2 className='py-1 px-2 bg-gray-100 flex justify-between group'>
                    <div className='flex-1 cursor-pointer' onClick={toggle}>{formatName(snippet.name)}</div>
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
