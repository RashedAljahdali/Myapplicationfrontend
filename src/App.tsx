
import React, { Component, SetStateAction, useEffect, useState } from 'react';
import Login from './Login.js';
import SetDefaultAppState , {Appstate} from './StatusSetter.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const App: React.FC = () => {
	const Globalstate : Appstate = SetDefaultAppState()
	 return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              State={Globalstate.Login.status}
              Setfunc={Globalstate.Login.setStatus}
            />
          }
        />
	<Route path="/dashboard" element={<Dashboard Globalstatus={Globalstate}/>} />
      </Routes>
    </BrowserRouter>
  );
	
};
export default App;
