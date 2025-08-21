import { Appstate } from "./StatusSetter";

export interface Dashboredprobs{
	Globalstatus : Appstate;
	Setter : React.Dispatch<React.SetStateAction<Appstate>>;
}


const Dashbored : React.FC<Dashboredprobs> =({Globalstatus , Setter}) => {	
	return(<></>)
}
export default Dashbored;
