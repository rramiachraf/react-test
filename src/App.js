import { BrowserRouter, Route, Routes } from 'react-router-dom'
// fonts
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
// components
import { Navbar } from './components/Navbar'
import { AuthProvider } from './contexts/auth'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { Posts } from './routes/Posts'

export const App = () => (
	<BrowserRouter>
		<AuthProvider>
			<div className="page">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/posts" element={<Posts />} />
					<Route
						path="*"
						element={
							<div id="notice">
								<h1>Not found</h1>
							</div>
						}
					/>
				</Routes>
			</div>
		</AuthProvider>
	</BrowserRouter>
)
