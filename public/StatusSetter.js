import { useState } from "react";
export default function SetDefaultAppState() {
    const [statuslogin, setStatusLogin] = useState({
        Username: null,
        Password: null,
        Done: null
    });
    return {
        Login: { status: statuslogin, setStatus: setStatusLogin }
    };
}
