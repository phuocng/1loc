import Head from 'next/head';
import * as React from 'react';
import { FooterBlock } from './FooterBlock';
import { HeaderBlock } from './HeaderBlock';

export const Layout: React.FC<{}> = ({ children }) => (
    <>
        <Head>
            <title>Favorite JavaScript utilities in single line of code - 1 LOC</title>
        </Head>
        <HeaderBlock />
        {children}
        <FooterBlock />
    </>
);
