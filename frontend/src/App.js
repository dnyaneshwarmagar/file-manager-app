import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FileView from './pages/FileView'
import FileUpload from './pages/FileUpload';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/allFiles' element={<FileView/>}/>
      <Route path='/' element={<FileUpload/>}/>
    </Routes>
    </Router>
  );
}

export default App;
