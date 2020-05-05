import React, { useState, useEffect } from 'react';

import AddYourButton from './AddYourButton';
import Layout from './Layout';
import Separator from './Separator';
import snippets from './snippets';
import SnippetItem from './SnippetItem';

const HomePage = () => {
    const [totalStars, setTotalStars] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/1loc')
            .then(res => res.json())
            .then(data => {
                setTotalStars(data.stargazers_count);
            })
            .catch(console.log);
    });

    return (
        <Layout>
            <h1 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>favorite JavaScript utilities</h1>
            <h3 className='font-light mb-8 text-2xl sm:text-3xl text-center'>
                in <span className='border-b-2 border-black'>single line of code</span>! No more!
            </h3>

            <div className="mb-16 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/phuoc-ng/1loc"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub ∙ {totalStars} ★
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                {
                    snippets.map((item) => {
                        return (
                            <div key={item.category} className='mb-16'>
                                <div className='mb-4'>
                                    <Separator>{item.category.split('-').join(' ').toUpperCase()}</Separator>
                                </div>
                                {
                                    item.snippets.map((s) => <SnippetItem key={s.name} snippet={s} />)
                                }
                                <AddYourButton />
                            </div>
                        ); 
                    })
                }
            </div>
        </Layout>
    );
};

export default HomePage;
