import './App.css';
import Welcome from './Welcome';
import About from './About';
import Stars from './Stars';
import Contact from './Contact';

function App() {
	return (
		<div className='appContainer'>
			<Stars />
			<Contact />
			<Welcome />
			<About />
		</div>
	);
}

export default App;
