import React, { useRef, useState } from 'react';

import highlight from '../helpers/highlight';

interface SampleCodeProps {
    code: string;
    lang: string;
}

const SampleCode: React.FC<SampleCodeProps> = ({ code, lang }) => {
    const codeRef = useRef<HTMLPreElement | null>(null);
    const [copied, setCopied] = useState(false);

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
                <div className='relative'>
                    <button className='absolute bg-black border-transparent bottom-0 opacity-75 p-1 right-0 text-white' onClick={copy}>
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                    <pre
                        ref={codeRef}
                        className='hljs'
                        dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
                    />
                </div>
            );
};

export default SampleCode;

