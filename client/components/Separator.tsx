import React from 'react';

const Separator: React.FC<{}> = ({ children }) => {
    return (
        <div
            className={`w-full text-center ${children ? '' : 'h-2'}`}
        >
            { children && (
            <div className='inline px-4 relative text-5xl font-bold'>
                <div
                    className='absolute bottom-0 h-6 left-0 w-full'
                    style={{
                        backgroundColor: '#FFEAA7',
                        borderRadius: '48% 16% 64% 16%',
                        transform: 'rotate(-4deg)',
                        zIndex: -1,
                    }}
                />
                {children}
            </div>
            )}
        </div>
    );
};

export default Separator;
