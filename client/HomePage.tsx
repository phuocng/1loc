import React, { useEffect, useState } from 'react';

import AddYourButton from './components/AddYourButton';
import Separator from './components/Separator';
import SnippetItem from './components/SnippetItem';
import Layout from './layout/Layout';
import snippets from './models/snippets';

const HomePage = () => {
    const [totalStars, setTotalStars] = useState(0);
    const total = snippets.map(item => item.snippets.length).reduce((a, b) => a + b, 0);

    useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/1loc')
            .then(res => res.json())
            .then(data => setTotalStars(data.stargazers_count))
            .catch(console.log);
    });

    return (
        <Layout>
            <h1 className='font-extrabold pt-24 text-center text-2xl sm:text-4xl px-1'>{total} Favorite JavaScript Utilities</h1>
            <h3 className='font-light mb-16 text-2xl sm:text-3xl text-center'>
                in <span className='font-bold' style={{ color: '#0984E3' }}>single line of code!</span> No more!
            </h3>

            <div className="mb-48 text-center">
                <a
                    className="text-2xl text-white px-4 py-2 rounded-full"
                    href="https://github.com/phuoc-ng/1loc"
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                        backgroundColor: '#6C5CE7',
                    }}
                >
                    GitHub ★ {totalStars}
                </a>
            </div>

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
        </Layout>
    );
};

export default HomePage;
