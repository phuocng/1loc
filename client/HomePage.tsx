import * as React from 'react';

import AddYourButton from './components/AddYourButton';
import Snippet from './components/Snippet';
import Footer from './layout/Footer';
import Header from './layout/Header';
import snippets from './models/snippets';

const HomePage = () => {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
};

export default HomePage;
