import React from 'react';

const SearchIcon: React.FC<{}> = () => {
    return (
        <svg
            viewBox='0 0 24 24'
            style={{
                fill: 'none',
                height: '24px',
                stroke: "rgba(0, 0, 0, 0.4)",
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 1,
                width: '24px',
            }}
        >
            <path
                d={`M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z M23.5,23.5 l-5.929-5.929`}
            />
        </svg>
    );
};

export default SearchIcon;
