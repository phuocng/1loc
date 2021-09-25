import * as React from 'react';

import { Code } from './Code';
import { classNames } from './utils/classNames'
import type { Snippet } from '../models/Snippet';

const normalizeCode = (code: string) => {
    const trim = code.trim();
    const content = trim.substring(5, trim.length - 3);
    return content;
};

export const SnippetItem: React.FC<{
    snippet: Snippet
}> = ({ snippet }) => {
    const [opened, setOpened] = React.useState(false);

    return (
        <div className="block-snippet" id={snippet.slug}>
            <div className="block-snippet__head">
                <div className="block-snippet__title" onClick={() => setOpened(v => !v)}>{snippet.title}</div>
                <a className="block-snippet__anchor" href={`#${snippet.slug}`}>#</a>
            </div>
            <div
                className={
                    classNames({
                        'block-snippet__body': true,
                        'block-snippet__body--opened': opened,
                    })
                }
            >
                <Code className="js">{normalizeCode(snippet.content)}</Code>
            </div>
        </div>
    );
};
