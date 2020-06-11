import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div className='relative'>
                <div
                    className='absolute top-0 left-0 right-0 bottom-0'
                    style={{
                        backgroundColor: '#FDCB6E',
                        height: '32rem',
                        transform: 'skewY(-4deg)',
                        transformOrigin: 'top left',
                        zIndex: -1,
                    }}
                />
                <Header />
                <div className='flex-1 px-2 lg:px-0'>
                    <div className="ml-auto mr-auto max-w-4xl mb-8">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
