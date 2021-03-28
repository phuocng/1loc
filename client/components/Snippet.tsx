import * as React from 'react';

import anchor from '../helpers/anchor';
import formatName from '../helpers/formatName';
import { SnippetModel } from '../models/SnippetList';
import Markdown from './Markdown';

import './snippet.css';

interface SnippetItemProps {
    snippet: SnippetModel;
}

const SnippetItem: React.FC<SnippetItemProps> = ({ snippet }) => {
    const contentRef = React.useRef<HTMLDivElement | null>(null);

    const toggle = () => {
        const contentEle = contentRef.current;
        contentEle && contentEle.classList.toggle('snippet__body--hidden');
    };

    const id = anchor(snippet.name);

    return (
        <div className='snippet' id={id}>
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
