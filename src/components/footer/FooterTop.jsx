import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { footerTopData } from "./data";

const FooterTop = () => {
  return (
    <FooterTopStyled>
      <div className="container">
        <div className="row ">
          <div className="col mx-auto content">
            <div className="row g-5">
              {footerTopData.map((element) => {
                const { id, title, linkItems } = element;
                return (
                  <>
                    <div
                      key={id}
                      className="col-10  mx-auto mx-md-0 col-sm-6 col-md-4 col-lg-2 "
                    >
                      <h4>{title}</h4>
                      <div className="links">
                        {linkItems.map((link) => {
                          const { item, url } = link;
                          return (
                            <>
                              <Link exact to={url}>
                                {item}
                              </Link>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FooterTopStyled>
  );
};

export default FooterTop;

const FooterTopStyled = styled.div`
  background: #111;
  padding: 2rem 0rem;

  @media (max-width: 580px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .content {
    border-bottom: 1px solid #666;
    padding-bottom: 1rem;

    h4 {
      font-family: "Rubik", sans-serif;
      color: #fff;
      text-transform: uppercase;
      /* padding-bottom: 0.5rem; */
    }
    .links {
      a {
        font-size: 0.925rem;
        display: block;
        text-transform: capitalize;
        color: #666;
        transition: var(--transition);

        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;
