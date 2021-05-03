import './App.css';
import Welcome from './Welcome';
import Main from './Main';
import IntersectionProvider from './context/intersectionContext';

function App() {
	return (
		<IntersectionProvider>
			<div className='appContainer'>
				<Welcome />
				<Main />
			</div>
		</IntersectionProvider>
	);
}

export default App;
