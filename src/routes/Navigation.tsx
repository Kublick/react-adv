import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

import logo from '../logo.svg';
import { routes } from './routes';

const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<img src={logo} alt="React Logo" />
						<ul>
							{routes.map(({ to, name }) => (
								<li key={name}>
									<NavLink
										to={to}
										className={({ isActive }) => (isActive ? 'nav-active' : '')}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ path, name, Component }) => (
							<Route path={path} element={<Component />} key={name} />
						))}
						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};

export default Navigation;
