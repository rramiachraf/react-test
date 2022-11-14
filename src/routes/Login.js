import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string, required, email } from 'yup'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

const Error = msg => <div id="error-msg">{msg}</div>

export function Login() {
	const navigate = useNavigate()
	const [, setLogged] = useContext(AuthContext)
	const initialValues = { email: '', password: '' }

	const schema = object({
		email: string().email().required(),
		password: string().required()
	})

	const onSubmit = values => {
		localStorage.setItem('creds', JSON.stringify(values))
		setLogged(true)
		navigate('/posts')
	}

	return (
		<main id="login" className="container">
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={onSubmit}
			>
				<Form id="login-form">
					<h1>Login</h1>
					<div className="section">
						<label>email</label>
						<Field name="email" type="text" placeholder="email@example.com" />
						<ErrorMessage name="email" render={Error} />
					</div>
					<div className="section">
						<label>password</label>
						<Field name="password" type="password" placeholder="password" />
						<ErrorMessage name="password" render={Error} />
					</div>
					<button className="bold" type="submit">
						Login
					</button>
				</Form>
			</Formik>
		</main>
	)
}
