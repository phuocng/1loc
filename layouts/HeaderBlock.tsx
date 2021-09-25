import * as React from 'react';
import Link from 'next/link';
import { Logo } from '@1milligram/design';

const HeaderBlock = () => {
    const HeaderLogo = React.forwardRef<HTMLAnchorElement, React.LinkHTMLAttributes<HTMLAnchorElement>>(
        (props, ref) => (
            <a href={props.href} onClick={props.onClick} ref={ref}>
                <Logo brand="1 LOC" />
            </a>
        )
    );

    return (
        <header className="block-header">
            <div className="block-container">
                <div className="block-header__inner">
                    <Link href="/" passHref>
                        <HeaderLogo />
                    </Link>                    
                    <Link href="https://github.com/1milligram/1loc">
                        <a className="block-header__cta">GitHub</a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderBlock;
