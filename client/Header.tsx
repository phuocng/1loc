import React from 'react';

import Filter from './Filter';

const Header = () => {
    return (
        <div className='bg-white border-b border-gray-400 sticky top-0 z-10'>
            <div className='ml-auto mr-auto max-w-3xl px-2 lg:px-0'>
                <Filter />
            </div>
        </div>
    );
};

export default Header;
