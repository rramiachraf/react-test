import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [logged, setLogged] = useState(null)

	useEffect(() => {
		const creds = localStorage.getItem('creds')
		if (creds) {
			setLogged(true)
		} else {
			setLogged(false)
		}
	})

	return (
		<AuthContext.Provider value={[logged, setLogged]}>
			{children}
		</AuthContext.Provider>
	)
}
