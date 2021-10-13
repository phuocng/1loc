import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { MarkdownLink, Blockquote, Code, Heading2, Heading3, Image, InlineCode, List, OrderedList, Paragraph, Table, TableBody, TableHead, ThematicBreak } from './markdown/index';

const markdownComponents = {
    a: MarkdownLink,
    blockquote: Blockquote,
    code: Code,
    h2: Heading2,
    h3: Heading3,
    hr: ThematicBreak,
    img: Image,
    inlineCode: InlineCode,
    ol: OrderedList,
    p: Paragraph,
    pre: (props) => <div {...props} />,
    table: Table,
    tbody: TableBody,
    thead: TableHead,
    ul: List,
};

export const Markdown: React.FC<{
    children: string;
}> = ({ children }) => {
    return (
        <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
            {children}
        </ReactMarkdown>
    );
};
