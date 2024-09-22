import { useEffect, useState } from "react";
import { getProfile } from "../services/services";
import styled from "styled-components";

const Container = styled.div`
  margin: 4rem 0;
`;

function UserProfile() {
  const [userName, setUserName] = useState();

  //   //
  useEffect(function () {
    (async function () {
      const res = await getProfile();
      setUserName(res["display_name"]);
    })();
  }, []);

  //   //
  return (
    <Container>
      {userName && (
        <>
          <h3>Welcome {userName}!</h3>
          <p>Which spotify component do you want to interact with today?</p>
        </>
      )}
    </Container>
  );
}

export default UserProfile;
