import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Grid from "components/global/Grid";
import { Link } from "gatsby";
import closeBtn from "assets/icons/close-btn.svg";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  min-height: 100vh;
`;
const StyledContainer = styled.div`
  grid-column: 3/8;
  border-left: 1px solid white;
  height: 100%;
  .close-btn {
    position: fixed;
    top: 25px;
    right: 25px;
    margin-left: auto;
  }
  & > div {
    & :first-child {
      padding: 25px;
      margin-top: 170px;
      border-bottom: 1px solid white;
      h1 {
      }
    }
  }
`;

const Contact = ({ location }) => {
  const { state = {} } = location;
  const { fromPage } = state;
  return (
    <Layout>
      <StyledGrid>
        <StyledContainer>
          <Link className="close-btn" to={fromPage}>
            <img src={closeBtn} alt="fermer la modal" />
          </Link>
          <div>
            <Title white>nous Contacter</Title>
          </div>
        </StyledContainer>
      </StyledGrid>
    </Layout>
  );
};

export default Contact;
