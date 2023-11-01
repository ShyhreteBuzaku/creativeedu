import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Details from './pages/Details';
import Grammar from './pages/Grammar';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="/details/:id"  element={<Details/>}/>
          <Route path="/grammar" element={<Grammar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
