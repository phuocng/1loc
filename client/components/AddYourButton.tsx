import React from 'react';

const AddYourButton: React.FC<{}> = () => {
    return (
        <div className='flex items-center justify-center mt-3'>
            <a 
                href="https://github.com/phuoc-ng/1loc#contributing"
                rel="noopener noreferrer"
                target="_blank"
                className='p-2 text-2xl text-center text-white w-full rounded-full'
                style={{
                    backgroundColor: '#00B894',
                }}
            >
                Add yours ...
            </a>
        </div>
    );
};

export default AddYourButton;
