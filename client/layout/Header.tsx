import React from 'react';

import Filter from '../components/Filter';

const Header = () => {
    return (
        <div className='p-2 sticky top-0 z-10' style={{
            backgroundColor: '#FDCB6E'
        }}>
            <div className='ml-auto mr-auto max-w-4xl'>
                <Filter />
            </div>
        </div>
    );
};

export default Header;
