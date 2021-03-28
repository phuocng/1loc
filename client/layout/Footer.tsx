import * as React from 'react';

import './footer.css';

const Footer: React.FC<{}> = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__about">
                    <div className="footer__author">
                        © 2020-{new Date().getFullYear()} Nguyen Huu Phuoc. All rights reserved
                    </div>
                    <a className="footer__social" href="https://github.com/phuoc-ng" rel="noopener noreferrer" target="_blank">GitHub</a>
                    <a className="footer__social" href="https://twitter.com/nghuuphuoc" rel="noopener noreferrer" target="_blank">Twitter</a>
                </div>

                <div className="footer__grid">
                    <div className="footer__col">
                        <ul className="footer__products">
                            <li className="footer__product">
                                <a href="https://blur.page" rel="noopener noreferrer" target="_blank" title="A browser extension to hide sensitive element on page">Blur Page</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://checkbrowsers.support" rel="noopener noreferrer" target="_blank" title="A browser extension to check browser compatibility without leaving your tab">Check Browsers Support</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://fakenumbers.io" rel="noopener noreferrer" target="_blank" title="A JavaScript library to fake a number">Fake Numbers</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://formvalidation.io" rel="noopener noreferrer" target="_blank" title="The best validation library for JavaScript">Form Validation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <ul className="footer__products">                            
                            <li className="footer__product">
                                <a href="https://react-pdf-viewer.dev" rel="noopener noreferrer" target="_blank" title="A PDF viewer made for React">React PDF Viewer</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://1loc.dev" rel="noopener noreferrer" target="_blank" title="Favorite JavaScript utilities in single line of code">1 LOC (4.1k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://csslayout.io" rel="noopener noreferrer" target="_blank" title="A collection of popular layouts and patterns made with CSS">CSS Layout (3.3k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://getfrontend.tips" rel="noopener noreferrer" target="_blank" title="Super tiny, quick tips, tricks and best practices of front-end development">Front-end Tips</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <ul className="footer__products">
                            <li className="footer__product">
                                <a href="https://htmldom.dev" rel="noopener noreferrer" target="_blank" title="Common tasks of managing HTML DOM with native API">HTML DOM (3.6k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://responsive.page" rel="noopener noreferrer" target="_blank" title="A collection of patterns to create a responsive web page">Responsive Design Patterns</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://thisthat.dev" rel="noopener noreferrer"  target="_blank" title="What is the difference between ___ and ___ in the front-end development?">this VS that (700 ★)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
