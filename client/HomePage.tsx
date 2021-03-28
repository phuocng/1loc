import React, { useEffect, useState } from 'react';

import AddYourButton from './components/AddYourButton';
import Snippet from './components/Snippet';
import snippets from './models/snippets';

const HomePage = () => {
    const [totalStars, setTotalStars] = useState("____");
    const total = snippets.map(item => item.snippets.length).reduce((a, b) => a + b, 0);

    // useEffect(() => {
    //     fetch('https://api.github.com/repos/phuoc-ng/1loc')
    //         .then(res => res.json())
    //         .then(data => setTotalStars(data.stargazers_count))
    //         .catch(console.log);
    // });

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <img src="/assets/logo.png" alt="1 LOC" />
                    </div>
                    <h1 className="header__heading">{total} Favorite JavaScript Utilities</h1>
                    <h3 className='header__subheading'>
                        in single line of code! No more!
                    </h3>
                </div>

                <div className="header__github">
                    <a
                        href="https://github.com/phuoc-ng/1loc"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        GitHub ★ {totalStars}
                    </a>
                </div>
            </header>

            <main className="main">
                <div className="container">
                {
                    snippets.map((item) => {
                        return (
                            <section key={item.category} className="section">
                                <div className="section__separator">
                                    <div className="section__title">{item.category.split('-').join(' ').toUpperCase()}</div>
                                </div>
                                {
                                    item.snippets.map((s) => <Snippet key={s.name} snippet={s} />)
                                }
                                <AddYourButton />
                            </section>
                        ); 
                    })
                }
                </div>
            </main>
        </>
    );
};

export default HomePage;
