import * as React from 'react';

import anchor from '../helpers/anchor';
import formatName from '../helpers/formatName';
import { Snippet } from '../models/snippets';
import Markdown from './Markdown';

import './snippet.css';

interface SnippetItemProps {
    snippet: Snippet;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ snippet }) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const toggle = () => {
        const contentEle = contentRef.current;
        contentEle && contentEle.classList.toggle('snippet__body--hidden');
    };

    const id = anchor(snippet.name);

    React.useEffect(() => {
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
        <div className='snippet' id={id} ref={containerRef}>
            <h2 className='snippet__header'>
                <div className='snippet__title' onClick={toggle}>{formatName(snippet.name)}</div>
                <a className='snippet__anchor' href={`#${id}`}>#</a>
            </h2>
            <div ref={contentRef} className='snippet__body snippet__body--hidden'>
                <Markdown content={snippet.body} />
            </div>
        </div>
    );
};

export default SnippetItem;
