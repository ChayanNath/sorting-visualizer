import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/home';
import './styles/main.scss';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
