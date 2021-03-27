import * as React from 'react';

import Filter from '../components/Filter';
import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <>
            <div className='relative'>
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
