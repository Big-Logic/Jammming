import { Outlet } from "react-router-dom";
import { DashboardSection } from "./reusable/dashboardReusable";
import BackButton from "./BackButton";

function RenderView() {
  return (
    <DashboardSection>
      {/* <BackButton /> */}
      <Outlet />
    </DashboardSection>
  );
}
export default RenderView;
