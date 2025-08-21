import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { formStyle, labelStyle, inputStyle, buttonStyle } from "./styles.js";
import { useNavigate } from "react-router-dom";
const Login = ({ State, Setfunc }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        Setfunc((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handle = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/senduserdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(State),
            credentials: "include"
        }).then(res => {
            if (!res.ok) {
                Setfunc(prev => (Object.assign(Object.assign({}, prev), { Done: false })));
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            else if (res.status === 200) {
                Setfunc(prev => (Object.assign(Object.assign({}, prev), { Done: true })));
            }
            return res.json(); // optional if you want the response body
        })
            .then(data => {
            console.log("Server response:", data); // handle response if needed
        })
            .catch(err => {
            Setfunc(prev => (Object.assign(Object.assign({}, prev), { Done: false })));
            console.error("Fetch error:", err);
        });
    };
    const navigate = useNavigate();
    useEffect(() => {
        if (State.Done) {
            navigate('/dashboard');
        }
    }, [State.Done, navigate]);
    return (_jsxs("form", { className: "formStyle", onSubmit: handle, style: formStyle, children: [_jsxs("label", { className: 'labelStyle', style: labelStyle, children: ["Username:", "", _jsx("input", { type: "text", name: "Username", value: State.Username || '', onChange: handleChange, style: inputStyle })] }), _jsx("br", {}), _jsxs("label", { className: 'labelStyle', style: labelStyle, children: ["Password:", "", _jsx("input", { type: "text", name: "Password", value: State.Password || '', onChange: handleChange, style: inputStyle })] }), _jsx("br", {}), _jsx("button", { type: "submit", className: 'buttonStyle', style: buttonStyle, children: "Submit" }), _jsx("br", {}), State.Done === false && (_jsx("div", { style: { color: 'red', marginTop: '10px' }, children: "Invalid username or password" }))] }));
};
export default Login;
