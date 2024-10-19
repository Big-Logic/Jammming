import { useEffect } from "react";
import { getTracksRecommendations } from "../../services/services";

function Recommendations() {
  useEffect(function () {
    (async function () {
      try {
        const res = await getTracksRecommendations();
        console.log(res);
      } catch (err) {}
    })();
  }, []);
  return <div>Recommendations</div>;
}
export default Recommendations;
