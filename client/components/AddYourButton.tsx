import * as React from 'react';

import './addYourButton.css';

const AddYourButton: React.FC<{}> = () => {
    return (
        <div className='add-your'>
            <a 
                href="https://github.com/phuoc-ng/1loc#contributing"
                rel="noopener noreferrer"
                target="_blank"
            >
                Add yours ...
            </a>
        </div>
    );
};

export default AddYourButton;
