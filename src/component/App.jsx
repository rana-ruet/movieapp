import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<h1>Rana Hamid</h1>} />
        <Route path="/hi" element={<h1>Hi Filmpire</h1>} />
      </Routes>
    </div>
  );
};

export default App;
