import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavBar, Actors, Movies, MovieInfo, Profile } from './';
const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movieinfo/:id" element={<MovieInfo />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
