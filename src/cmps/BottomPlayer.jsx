import { useSelector } from 'react-redux'

export function BottomPlayer() {
	const count = useSelector(storeState => storeState.userModule.count)

	return (
		<footer className="app-footer full">
			
		</footer>
	)
}