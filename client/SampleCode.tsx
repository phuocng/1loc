import React from 'react';

import highlight from './highlight';

interface SampleCodeProps {
    code: string;
    lang: string;
}

const SampleCode: React.FC<SampleCodeProps> = ({ code, lang }) => {
    return code === ''
            ? <></>
            : (
                <pre
                    className='hljs'
                    dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
                />
            );
};

export default SampleCode;
