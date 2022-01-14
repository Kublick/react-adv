import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponet = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	name: string;
	Component: LazyExoticComponent<JSXComponet> | JSXComponet;
}

const LazyyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyyLayout,
		name: 'LazyLayout - Dash',
	},
	{
		to: '/nolazy',
		path: 'nolazy',
		Component: NoLazy,
		name: 'nolazy',
	},
];
