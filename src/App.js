import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployeeDetails from './Components/EmployeeDetails';
// import EmployeeDetails from './components/EmployeeDetails';
import AttendanceHistory from './Components/AttendanceHistory';
// import AttendanceHistory from './components/AttendanceHistory';

function App() {
  return (
    <div className="container my-5">
      <EmployeeDetails />
      <AttendanceHistory />
    </div>
  );
}

export default App;
