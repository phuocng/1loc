import * as React from 'react';

import highlight from '../helpers/highlight';
import './sampleCode.css';

interface SampleCodeProps {
    code: string;
    lang: string;
}

const SampleCode: React.FC<SampleCodeProps> = ({ code, lang }) => {
    const codeRef = React.useRef<HTMLPreElement | null>(null);
    const [copied, setCopied] = React.useState(false);

    const copy = () => {
        const codeEle = codeRef.current;
        if (!codeEle) {
            return;
        }

        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(codeEle);
        selection.removeAllRanges();
        selection.addRange(range);

        // Execute the "copy" command
        try {
            document.execCommand('copy');
            setCopied(true);
        } catch (err) {
            // Unable to copy
        } finally {
            selection.removeAllRanges();
        }
    };

    return code === ''
            ? <></>
            : (
                <div className='sample-code'>
                    <button className='sample-code__copy' onClick={copy}>
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                    <pre ref={codeRef} className={`language-${lang}`} dangerouslySetInnerHTML={{ __html: highlight(code, lang) }} />
                </div>
            );
};

export default SampleCode;

