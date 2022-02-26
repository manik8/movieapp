import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MoviesContainer from './components/moviesContainer';
import AllMovies from './components/AllMovies';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<MoviesContainer />} />
        </Routes>
        <Routes>
          <Route path='/movies' element={<AllMovies />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
