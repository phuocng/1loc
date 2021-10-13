import * as React from 'react';

import { Markdown } from './Markdown';
import type { Snippet } from '../models/Snippet';
import { classNames } from '../utils/classNames';

export const SnippetItem: React.FC<{
    index: number;
    snippet: Snippet;
}> = ({ index, snippet }) => {
    const [opened, setOpened] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>();

    const handleHashChange = React.useCallback(() => {
        if (window.location.hash && window.location.hash === `#${snippet.slug}` && containerRef.current) {
            window.scrollTo(0, containerRef.current.offsetTop - 96);
            setOpened(true);
        }
    }, []);

    React.useLayoutEffect(() => {
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange, false);
        return () => {
            window.removeEventListener('hashchange', handleHashChange, false);
        };
    }, []);

    return (
        <div className="block-snippet" ref={containerRef}>
            <div className="block-snippet__head">
                <div className="block-snippet__index">{index}.</div>
                <div className="block-snippet__title" onClick={() => setOpened((v) => !v)}>
                    {snippet.title}
                </div>
                <a className="block-snippet__anchor" href={`#${snippet.slug}`}>
                    #
                </a>
            </div>
            <div
                className={classNames({
                    'block-snippet__body': true,
                    'block-snippet__body--opened': opened,
                })}
            >
                <Markdown>{snippet.content}</Markdown>
            </div>
        </div>
    );
};
