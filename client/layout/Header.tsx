import React from 'react';

import Filter from '../components/Filter';

const Header = () => {
    return (
        <div className='p-2 sticky top-0 z-10'>
            <div className='ml-auto mr-auto max-w-3xl'>
                <Filter />
            </div>
        </div>
    );
};

export default Header;
