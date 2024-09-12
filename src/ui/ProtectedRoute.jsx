/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //Fetching the current login user data
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      //if user data is fetched completely and user is not autenticated
      //navigate the user back to Login page
      if (!isLoading && !isAuthenticated) navigate("/login", { replace: true });
    },
    [isAuthenticated, isLoading, navigate]
  );

  //while user data is fetching
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return children;
}

export default ProtectedRoute;
