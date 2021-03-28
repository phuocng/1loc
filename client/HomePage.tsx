import * as React from 'react';

import Product from './components/Product';
import Snippet from './components/Snippet';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { ProductList } from './models/ProductList';
import { SnippetList } from './models/SnippetList';

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                {
                    SnippetList.map((item, index) => {
                        const product = ProductList[index % ProductList.length];
                        return (
                            <section key={item.category} className="section">
                                <div className="section__separator">
                                    <div className="section__title">{item.category.split('-').join(' ').toUpperCase()}</div>
                                </div>
                                {
                                    item.snippets.map((s) => <Snippet key={s.name} snippet={s} />)
                                }
                                <Product product={product} />
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
