import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div
                className='bg-repeat-x'
                style={{ backgroundImage: 'url(/assets/angle.svg)' }}
            >
                <Header />
                <div className='flex-1 px-2 lg:px-0'>
                    <div className="ml-auto mr-auto max-w-3xl mb-8">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
