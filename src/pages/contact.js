import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import Title from "components/global/Title";
import Text from "components/global/Text";
import Button from "components/global/Button";
import Grid from "components/global/Grid";
import { navigate } from "gatsby";
import closeBtn from "assets/icons/close-btn.svg";
import ppLogo from "assets/logos/logo-pivot-panda-portrait-white.svg";
import plaquette from "assets/pdf/Presentation-Pivot-Panda.pdf";

const StyledGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  min-height: 100vh;
  display: block;
  @media ${(props) => props.theme.minWidth.md} {
    display: grid;
  }
`;
const StyledContainer = styled.div`
  grid-column: 3/8;
  height: 100%;
  @media ${(props) => props.theme.minWidth.md} {
    border-left: 1px solid white;
  }
  .close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    margin-left: auto;
  }
  & > div {
    @media ${(props) => props.theme.minWidth.md} {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-column-gap: ${({ theme }) => theme.columnGap.desktop};
    }
    &:nth-of-type(1) {
      padding-top: 40px;
      @media ${(props) => props.theme.minWidth.md} {
        border-bottom: 1px solid white;
        padding: 170px 25px 25px;
      }
      h1 {
        grid-column: 1 / span 2;
        border-bottom: 1px solid white;
        padding: ${({ theme }) => theme.columnGap.mobile};
        @media ${(props) => props.theme.minWidth.md} {
          border-bottom: none;
          padding: 0;
        }
      }
      p {
        padding: 30px ${({ theme }) => theme.columnGap.mobile} 0;
        @media ${(props) => props.theme.minWidth.md} {
          grid-column: 4/6;
          align-self: end;
          padding: 0;
        }
      }
    }
    &:nth-of-type(2) {
      @media ${(props) => props.theme.minWidth.md} {
        padding-bottom: 100px;
      }
      & > div {
        padding: ${({ theme }) => theme.columnGap.mobile};
        @media ${(props) => props.theme.minWidth.md} {
          grid-column: 1 / span 2;
          border-right: 1px solid white;
          border-bottom: 1px solid white;
          padding: ${({ theme }) => theme.columnGap.desktop};
        }
        aside {
          margin-bottom: 5px;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          padding: ${({ theme }) => theme.columnGap.mobile} 0 0;
          margin: ${({ theme }) => theme.columnGap.mobile};
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          @media ${(props) => props.theme.minWidth.md} {
            padding: ${({ theme }) => theme.columnGap.desktop};
            border-top: 0;
            margin: 0;
          }
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          grid-column: 1 / span 1;
          border-right: none;
          @media ${(props) => props.theme.minWidth.md} {
            margin-right: -${({ theme }) => theme.columnGap.desktop};
          }
        }
        &:nth-of-type(3) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: ${(props) => props.theme.columnGap.mobile};
          @media ${(props) => props.theme.minWidth.md} {
            display: block;
          }
          & > div {
            &:last-child {
              @media ${(props) => props.theme.minWidth.md} {
                display: none;
              }
            }
          }
        }
        &:nth-of-type(4) {
          display: none;
          @media ${(props) => props.theme.minWidth.md} {
            display: block;
          }
        }
        &:nth-of-type(5) {
          position: relative;
          border-top: 1px solid white;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-column-gap: ${(props) => props.theme.columnGap.mobile};
          @media ${(props) => props.theme.minWidth.md} {
            display: block;
            grid-column: 2 / span 1;
            grid-row: 3 / span 2;
            border-left: 1px solid white;
          }
          img {
            width: 100%;
          }
          p {
            position: absolute;
            right: 15px;
            bottom: 15px;
            line-height: normal;
            @media ${(props) => props.theme.minWidth.md} {
              display: none;
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <StyledGrid className="pageAnimation">
        <StyledContainer>
          <button className="close-btn" onClick={() => navigate(-1)}>
            <img src={closeBtn} alt="fermer la modal" />
          </button>
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
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:contact@pivotpanda.com"
                white
              >
                contact@pivotpanda.com
              </Button>
            </div>
            <div>
              <Text type="label" white>
                Venez nous voir
              </Text>
              <a
                href="https://goo.gl/maps/VRzrYuomuBYaicsL8"
                target="_blank"
                rel="noreferrer"
              >
                <Text white>55 rue Sylvabelle, 13006, Marseille</Text>
              </a>
              <a
                href="https://goo.gl/maps/pzQ5Fy1LzhAoyPkY9"
                target="_blank"
                rel="noreferrer"
              >
                <Text white>38 rue du Chemin Vert, 75011, Paris</Text>
              </a>
            </div>
            <div>
              <div>
                <Text type="label" white>
                  Suivez nous
                </Text>
                <a
                  href="https://www.linkedin.com/company/pivot-panda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text white>LinkedIn</Text>
                </a>
                <a
                  href="https://www.instagram.com/pivot_panda_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text white>Instagram</Text>
                </a>
              </div>
              <div>
                <Text type="label" white>
                  Ressources
                </Text>
                <a href={plaquette} download="Presentation-Pivot-Panda.pdf">
                  <Text white>Plaquette de présentation</Text>
                </a>
              </div>
            </div>
            <div>
              <Text type="label" white>
                Ressources
              </Text>
              <a href={plaquette} download="Presentation-Pivot-Panda.pdf">
                <Text white>Plaquette de présentation</Text>
              </a>
            </div>
            <div>
              <img src={ppLogo} alt="Logo Pivot Panda" />
              <Text white>© Pivot Panda 2023</Text>
            </div>
          </div>
        </StyledContainer>
      </StyledGrid>
    </Layout>
  );
};

export default Contact;
