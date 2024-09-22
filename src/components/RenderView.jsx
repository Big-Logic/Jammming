import { Outlet } from "react-router-dom";
import { DashboardSection } from "./reusable/dashboardReusable";

function RenderView() {
  return (
    <DashboardSection>
      <Outlet />
    </DashboardSection>
  );
}
export default RenderView;
