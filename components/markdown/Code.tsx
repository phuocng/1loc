import * as React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const Code = (props) => {
    const {
        children,
        className,
        inline,
    }: {
        children: string | string[];
        className?: string;
        inline: boolean;
    } = props;

    const lang = className ? className.split('-').pop() : 'js';
    const code = Array.isArray(children) ? children[0].trim() : children.trim();

    return inline ? (
        <code className="block-markdown__code">{code}</code>
    ) : (
        <Highlight {...defaultProps} theme={theme} code={code} language={lang as Language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`block-markdown__pre ${className}`} style={{ ...style }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default Code;
