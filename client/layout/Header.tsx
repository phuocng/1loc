import * as React from 'react';

import './header.css';
import { SnippetList } from '../models/SnippetList';

const Header: React.FC<{}> = () => {
    const [totalStars, setTotalStars] = React.useState("____");
    const total = SnippetList.map(item => item.snippets.length).reduce((a, b) => a + b, 0);

    React.useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/1loc')
            .then(res => res.json())
            .then(data => setTotalStars(data.stargazers_count))
            .catch(console.log);
    }, []);

    return (
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
    );
};

export default Header;
