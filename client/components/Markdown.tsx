import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import SampleCode from './SampleCode';

interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    const renderCode = (p: any) => {
        return <SampleCode code={p.value} lang={p.language} />;
    };

    return (
        <ReactMarkdown
            renderers={{
                code: renderCode,
            }}
            source={content}
        />
    );
};

export default Markdown;
