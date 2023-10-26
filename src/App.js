import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Details from './pages/Details';
import Result from './pages/Result';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="/details/:id"  element={<Details/>}/>
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
