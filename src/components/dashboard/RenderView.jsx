import { Outlet } from "react-router-dom";
import { DashboardSection } from "./Reusable";
import { Cont } from "../reusable/Cont";
// import BackButton from "../BackButton";

function RenderView() {
  return (
    <DashboardSection>
      {/* <BackButton /> */}
      <Outlet />
    </DashboardSection>
  );
}
export default RenderView;
