import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import Header from './components/Header';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='' element={<AddEmployee/>}/>
      <Route path='search' element={<SearchEmployee/>}/>
      <Route path='delete' element={<Delete/>}/>
      <Route path='view' element={<ViewAll/>}/>
      <Route path='header' element={<Header/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
