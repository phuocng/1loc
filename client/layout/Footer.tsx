import React from 'react';

import SubscribeForm from '../components/SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <div
            className='bg-repeat-x bg-cover'
            style={{ backgroundImage: 'url(/assets/wave.svg)' }}
        >
            <div className='ml-auto mr-auto max-w-4xl px-2 lg:px-0 pt-32'>
                <SubscribeForm />
                <div className='flex flex-wrap -ml-1 -mr-1'>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Products
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://blur.page"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="BlurPage - a browser extension to hide sensitive element on page"
                                >
                                    Blur Page
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://fakenumbers.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Fake Numbers - a JavaScript library to fake a number"
                                >
                                    Fake Numbers
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://formvalidation.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="FormValidation - the best validation library for JavaScript"
                                >
                                    Form Validation
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://react-pdf-viewer.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="React PDF Viewer - a PDF viewer made for React"
                                >
                                    React PDF Viewer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Resources
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://1loc.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="1 LOC - favorite JavaScript utilities in single line of code"
                                >
                                    1 LOC (3k★)
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://csslayout.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                                >
                                    CSS Layout (2.4k★)
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://htmldom.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="HTML DOM - Common tasks of managing HTML DOM with native API"
                                >
                                    HTML DOM (2.9k★)
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://thisthat.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="this vs that - What is the difference between ___ and ___ in the front-end development?"
                                >
                                    this VS that
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Follow me
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://dev.to/phuocng"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    dev.to
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://github.com/phuoc-ng"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://twitter.com/nghuuphuoc"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='text-center py-8' style={{ color: '#C2C2C2' }}>
                    © 2020 Nguyen Huu Phuoc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
