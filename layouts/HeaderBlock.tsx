import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@1milligram/design';
import DownArrowIcon from '../components/Icons/DownArrowIcon';
import UpArrowIcon from '../components/Icons/UpArrowIcon';

export const HeaderBlock = () => {
	const [totalStars, setTotalStars] = React.useState(0);
	const isItAnArticle = useRouter().pathname.includes('slug');
	const isScreenSmall = typeof window !== "undefined" && window.innerWidth < 767;
	const [isSidebarShown, setIsSidebarShown] = React.useState(false);

	const sidebarToggleHandler = () => {
		const sidebarElement = document.querySelector('.page-snippet__sidebar');
		setIsSidebarShown(!isSidebarShown);

		if (sidebarElement.classList.contains('page-snippet__sidebar--shown')) {
			sidebarElement.classList.replace('page-snippet__sidebar--shown', 'page-snippet__sidebar--hidden');
			return;
		}

		if (sidebarElement.classList.contains('page-snippet__sidebar--hidden')) {
			sidebarElement.classList.replace('page-snippet__sidebar--hidden', 'page-snippet__sidebar--shown');
			return;
		}
	}

	React.useEffect(() => {
		fetch('https://api.github.com/repos/1milligram/1loc')
			.then((res) => res.json())
			.then((data) => setTotalStars(data.stargazers_count))
			.catch(console.log);
	}, []);

	const HeaderLogo = React.forwardRef<HTMLAnchorElement, React.LinkHTMLAttributes<HTMLAnchorElement>>((props, ref) => (
		<a href={props.href} onClick={props.onClick} ref={ref}>
			<Logo brand="1 LOC" />
		</a>
	));

	return (
		<header className="block-header">
			<div className="block-container">
				<div className="block-header__inner">
					<Link href="/" passHref>
						<HeaderLogo />
					</Link>
					<Link href="https://github.com/1milligram/1loc">
						<a className="block-header__cta">GitHub {totalStars}★</a>
					</Link>
				</div>
			</div>
			{
				isItAnArticle && isScreenSmall
					? (
						<div
							className="block-header__sidebar-toggle"
							onClick={sidebarToggleHandler}
						>
							{isSidebarShown ? <UpArrowIcon /> : <DownArrowIcon />}
						</div>
					)
					: null
			}
		</header>
	);
};
