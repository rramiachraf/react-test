import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		const creds = localStorage.getItem('creds')
		if (creds) {
			setLogged(true)
		}
	})

	return (
		<AuthContext.Provider value={[logged, setLogged]}>
			{children}
		</AuthContext.Provider>
	)
}
