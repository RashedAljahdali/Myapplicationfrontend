import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Login from './Login.js';
import SetDefaultAppState from './StatusSetter.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashbored from './Dashbored.js';
const App = () => {
    const [Globalstate, setStatus] = useState(SetDefaultAppState());
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, { State: Globalstate.Login.status, Setfunc: Globalstate.Login.setStatus }) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashbored, { Globalstatus: Globalstate, Setter: setStatus }) })] }) }));
};
export default App;
