import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Text from "components/global/Text";
import Button from "components/global/Button";
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: ${(props) => props.theme.columnGap.mobile};
    @media ${(props) => props.theme.minWidth.md} {
      grid-column-gap: ${({ theme }) => theme.columnGap.desktop};
    }
    &:nth-of-type(1) {
      padding: ${({ theme }) => theme.columnGap.mobile};
      padding: 25px;
      margin-top: 170px;
      border-bottom: 1px solid white;
      @media ${(props) => props.theme.minWidth.md} {
        padding: ${({ theme }) => theme.columnGap.desktop};
      }
      h1 {
        grid-column: 1 / span 2;
      }
      p {
        grid-column: 4/6;
        align-self: end;
      }
    }
    &:nth-of-type(2) {
      & > div {
        padding: ${({ theme }) => theme.columnGap.mobile};
        grid-column: 1 / span 2;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        @media ${(props) => props.theme.minWidth.md} {
          padding: ${({ theme }) => theme.columnGap.desktop};
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          grid-column: 1 / span 1;
          border-right: none;
          margin-right: -${({ theme }) => theme.columnGap.mobile};
          @media ${(props) => props.theme.minWidth.md} {
            margin-right: -${({ theme }) => theme.columnGap.desktop};
          }
        }
        &:nth-of-type(5) {
          grid-column: 2 / span 1;
          grid-row: 3 / span 2;
          border-left: 1px solid white;
        }
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
            <Title
              type="pageTitle"
              white
              children={"nous<br>Contacter"}
            ></Title>
            <Text white>
              Vous avez un projet ?<br />
              N'hésitez pas à nous contacter pour en discuter ! Notre équipe est
              à votre écoute et prête à vous accompagner pour concrétiser vos
              idées.
            </Text>
          </div>
          <div>
            <div>
              <Button href="contact@pivotpanda.com" white>
                contact@pivotpanda.com
              </Button>
            </div>
            <div>
              <Text white>55 rue Sylvabelle, 13006, Marseille</Text>
              <Text white>55 rue Sylvabelle, 13006, Marseille</Text>
            </div>
            <div>
              <Text white>LinkedIn</Text>
              <Text white>Instagram</Text>
            </div>
            <div>
              <Text white>Plaquette de présentation</Text>
            </div>
            <div>
              <Text white>Logo</Text>
            </div>
          </div>
        </StyledContainer>
      </StyledGrid>
    </Layout>
  );
};

export default Contact;
