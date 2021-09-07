/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import StdLogin from './src/components/stdLogin';
import StudentList from './src/components/stdList';
import ViewPresent from './src/components/ViewPresent';
import AdminLogin from './src/components/admin';
import Router from './src/components/Navigation';
import AttendanceList from './src/components/attendanceList';

function App()
{
  return(
    <>
      {/* <StdLogin /> */}
      {/* <StudentList /> */}
      {/* <ViewPresent /> */}
      {/* <AdminLogin /> */}
      <Router />
      {/* <AttendanceList /> */}
      
    </>
  )
}

export default App;
