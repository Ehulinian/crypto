import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import FaqS from './components/FaqS/FaqS';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurServices from './components/OurServices/OurServices';
import OurToken from './components/OurToken/OurToken';
import StartNow from './components/StartNow/StartNow';
import Team from './components/Team/Team';

function App() {
	return (
		<>
			<Header />
			<AboutUs />
			<main className="main">
				<div className="container">
					<div className="main-content">
						<OurServices />
						<OurToken />
						<FaqS />
						<Team />
						<Blog />
						<StartNow />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
