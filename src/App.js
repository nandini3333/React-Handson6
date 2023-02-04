import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import DataContext from './Components/DataContext';
import AddPage from './Components/AddPage';
import EditPage from './Components/EditPage';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([{
    name: 'John',
    age: '25',
    course: 'MERN',
    batch: 'April'
  },
  {
    name: 'Doe',
    age: '26',
    course: 'MERN',
    batch: 'August'
  },
  {
    name: 'Biden',
    age: '22',
    course: 'MERN',
    batch: 'June'
  },
  {
    name: 'John',
    age: '23',
    course: 'MERN',
    batch: 'September'
  },
  {
    name: 'Barar',
    age: '27',
    course: 'MERN',
    batch: 'June'
  },
  {
    name: 'Christ',
    age: '24',
    course: 'MERN',
    batch: 'October'
  },
  {
    name: 'Elent',
    age: '25',
    course: 'MERN',
    batch: 'April'
  }])
  return (
    <div id='container'>
      <div id='header'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/student'}>Student</Link>
        <Link className='link' to={'/contact-us'}>Contact Us</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />

        <Route path='/contact-us' element={<ContactUs />} />

        <Route path='/student' element={
          <DataContext.Provider value={{ data, setData }}>
            <Student />
          </DataContext.Provider>} />

        <Route path='/edit-page' element={
          <DataContext.Provider value={{ data, setData }}>
            <EditPage />
          </DataContext.Provider>} />

        <Route path='/add-page' element={
          <DataContext.Provider value={{ data, setData }}>
            <AddPage />
          </DataContext.Provider>} />
      </Routes>
    </div>
  );
}

export default App;
