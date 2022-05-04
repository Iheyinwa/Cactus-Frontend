import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import VerifyEmail from './components/VerifyEmail';
import { AuthProvider } from './auth-context';

//Pages
import About from './pages/About';
import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import LitePlan from './pages/LitePlan';
import BasicPlan from './pages/BasicPlan';
import PlusPlan from './pages/PlusPlan';

function App() {
	const [ successMsg, setSuccessMsg ] = useState('');
	const [ errorMsg, setErrorMsg ] = useState('');

	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/dashboard"
					element={
						<Dashboard
							successMsg={successMsg}
							setSuccessMsg={setSuccessMsg}
							errorMsg={errorMsg}
							setErrorMsg={setErrorMsg}
						/>
					}
				/>
				<Route path="/dashboard/plans" element={<Dashboard />} />
				<Route
					path="/dashboard/claims"
					element={
						<Dashboard
							successMsg={successMsg}
							setSuccessMsg={setSuccessMsg}
							errorMsg={errorMsg}
							setErrorMsg={setErrorMsg}
						/>
					}
				/>
				<Route path="/dashboard/useraccount" element={<Dashboard />} />
				<Route path="/dashboard/banksettings" element={<Dashboard />} />
				<Route path="/dashboard/contactus" element={<Dashboard />} />
				<Route path="/dashboard/mywallet" element={<Dashboard />} />

				<Route path="/faqs" element={<Faqs />} />
				<Route path="/products/LitePlan" element={<LitePlan />} />
				<Route path="/products/BasicPlan" element={<BasicPlan />} />
				<Route path="/products/PlusPlan" element={<PlusPlan />} />
				<Route
					path="/login"
					element={
						<Auth
							successMsg={successMsg}
							setSuccessMsg={setSuccessMsg}
							errorMsg={errorMsg}
							setErrorMsg={setErrorMsg}
						/>
					}
				/>
				<Route
					path="/register"
					element={
						<Auth
							successMsg={successMsg}
							setSuccessMsg={setSuccessMsg}
							errorMsg={errorMsg}
							setErrorMsg={setErrorMsg}
						/>
					}
				/>
				<Route path="/reset-password" element={<Auth />} />
				<Route path="/users/verify-email/:token" element={<VerifyEmail />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Routes>
		</AuthProvider>
	);
}

export default App;
