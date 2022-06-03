import  Login from '../../src/screens/login';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from '../screens/dashboard';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
           <Route path = '/*' element = {<Dashboard/>}></Route>
            <Route path = '/login' element = {<Login/>}></Route>
        </Routes>
    </Router>
  );
}
