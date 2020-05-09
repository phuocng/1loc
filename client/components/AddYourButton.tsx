import React from 'react';

const AddYourButton: React.FC<{}> = () => {
    return (
        <div className='bg-blue-100 border-2 border-dashed border-gray-400 flex items-center justify-center mt-3'>
            <a 
                href="https://github.com/phuoc-ng/1loc#contributing"
                rel="noopener noreferrer"
                target="_blank"
                className='p-2 text-2xl text-center w-full'
            >
                Add yours ...
            </a>
        </div>
    );
};

export default AddYourButton;
