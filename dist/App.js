import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Login from './Login.js';
import SetDefaultAppState from './StatusSetter.js';
import Videoview from './videoview.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
const App = () => {
    const Globalstate = SetDefaultAppState();
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, { State: Globalstate.Login.status, Setfunc: Globalstate.Login.setStatus }) }), _jsx(Route, { path: "/dashboard", element: _jsx(Videoview, {}) })] }) }));
};
export default App;
