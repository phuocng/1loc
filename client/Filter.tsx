import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import anchor from './helpers/anchor';
import formatName from './helpers/formatName';
import snippets from './snippets';
import SearchIcon from './SearchIcon';

const Filter: React.FC<{}> = () => {
    const [keyword, setKeyword] = useState('');
    const searchBoxRef = useRef<HTMLInputElement>();

    const onClickSearchIcon = () => searchBoxRef.current.focus();
    const onChangeSearchBox = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);
    const onClickTask = () => setKeyword('');

    const allSnippets = snippets.map(s => s.snippets.map(item => formatName(item.name)).join('___')).join('___').split('___');
    const result = keyword
                ? allSnippets.filter((v) => v.toLowerCase().includes(keyword.toLowerCase()))
                : [];

    return (
        <div className='w-full relative'>
            <div>
                <input
                    ref={searchBoxRef}
                    className='border-none w-full p-2 flex-1'
                    placeholder='Filter'
                    value={keyword}
                    onChange={onChangeSearchBox}
                />
            </div>
            <button className='absolute border-none p-2 right-0 top-0' onClick={onClickSearchIcon}>
                <SearchIcon />
            </button>
            {keyword && result.length === 0 && (
                <div className='absolute left-0 w-full bg-white border-l border-r border-b border-gray-400 p-2'>
                    Not found
                </div>
            )}
            {keyword && result.length > 0 && (
                <div
                    className='absolute left-0 w-full bg-white border-l border-r border-b border-gray-400 overflow-auto'
                    style={{ maxHeight: '300px' }}
                >
                    <ul>
                    {
                        result.map((title, index) => {
                            return (
                                <li
                                    key={index}
                                    className='border-gray-400 hover:bg-gray-200 truncate border-t'
                                >
                                    <a
                                        className='p-1 block'
                                        onClick={onClickTask}
                                        href={`#${anchor(title)}`}
                                        title={title}
                                    >
                                        {title}
                                    </a>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Filter;
