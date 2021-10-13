import Link from 'next/link';
import * as React from 'react';

const MarkdownLink = (props) => (
    <Link href={props.href}>
        <a className="block-markdown__link">{props.children}</a>
    </Link>
);

export default MarkdownLink;
