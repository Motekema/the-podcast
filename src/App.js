import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppWorks />
        <AppAbout />
        <AppTeams />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
