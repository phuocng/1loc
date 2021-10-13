import * as React from 'react';

export const Ad = () => {
    const containerRef = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('id', '_carbonads_js');
        script.src = 'https://cdn.carbonads.com/carbon.js?serve=CE7I6KQI&placement=htmldomdev';

        containerRef.current.appendChild(script);
    }, []);

    return <div ref={containerRef} />;
};
