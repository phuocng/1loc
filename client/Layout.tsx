import React from 'react';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div className='flex-1 px-2 lg:px-0'>
                <div className="ml-auto mr-auto max-w-3xl mb-8">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
