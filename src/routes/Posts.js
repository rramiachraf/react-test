import { useEffect, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export function Posts() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [logged] = useContext(AuthContext)

	useEffect(() => {
		const url = 'https://jsonplaceholder.typicode.com/posts'
		fetch(url)
			.then(async res => {
				const posts = await res.json()
				setPosts(posts)
				setLoading(false)
			})
			.catch(e => {
				console.log(e)
				setLoading(false)
				setError(true)
			})
	}, [])

	if (logged === false) {
		return <Navigate to="/login" replace />
	}

	if (error) {
		return (
			<div id="notice">
				<h1>Something went wrong</h1>
			</div>
		)
	}

	if (loading || logged === null) {
		return (
			<div id="notice">
				<h1>Loading...</h1>
			</div>
		)
	}

	return (
		<main id="main" className="container">
			<h1 id="title">Posts</h1>
			<section id="articles">
				{posts.map(({ id, title, body }) => (
					<article id="article-card" key={id}>
						<h1>{title}</h1>
						<p>{body}</p>
					</article>
				))}
			</section>
		</main>
	)
}
