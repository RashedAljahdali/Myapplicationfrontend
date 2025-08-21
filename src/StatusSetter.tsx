import { useState } from "react";
import {Logininterface} from "./Login";
import { videoviews } from "./videoview";

interface StatusWithSetter<T> {
  status: T;
  setStatus: React.Dispatch<React.SetStateAction<T>>;
}

export interface Appstate{
	Login : StatusWithSetter<Logininterface>;
	videos : StatusWithSetter<videoviews>;
}

export default function SetDefaultAppState() : Appstate{
	const [statuslogin , setStatusLogin] = useState<Logininterface>(
		{
			Username : "",
			Password : "",
			Done : null
		}
	)
	const [statusvideos , setStatusvideos] = useState<videoviews>(
		{
			State : null						
		}
	)
    return{
		Login : {status : statuslogin , setStatus : setStatusLogin},
		videos : {status : statusvideos , setStatus : setStatusvideos}
	}
}
