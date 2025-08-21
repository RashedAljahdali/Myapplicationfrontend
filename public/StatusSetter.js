import { useState } from "react";
export default function SetDefaultAppState() {
    const [statuslogin, setStatusLogin] = useState({
        Username: null,
        Password: null,
        Done: null
    });
    const [statusvideos, setStatusvideos] = useState({
        State: null
    });
    return {
        Login: { status: statuslogin, setStatus: setStatusLogin },
        videos: { status: statusvideos, setStatus: setStatusvideos }
    };
}
