import { Appstate } from "./StatusSetter";
import Videoview from "./videoview";

export interface Dashboredprobs {
  Globalstatus: Appstate;
}

const Dashboard: React.FC<Dashboredprobs> = (Globalstatus) => {
  return (
    <>
      <Videoview />
    </>
  );
};
export default Dashboard;
