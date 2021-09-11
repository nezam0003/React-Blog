import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FooterBottom = () => {
  return (
    <FooterBottomStyled>
      <div className="container">
        <div className="row">
          <div className="col mx-auto">
            <div className="footer-content">
              <div className="date">
                &copy; {new Date().getFullYear()} Bengal-Softare. All rights
                reserved.
              </div>
              <div className="links">
                <Link exact to="/terms-of-service">
                  terms of services
                </Link>
                <Link exact to="/primacy-policy">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterBottomStyled>
  );
};

export default FooterBottom;

const FooterBottomStyled = styled.footer`
  background: #000;
  color: #fff;
  padding: 1rem 0rem;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 770px) {
      grid-template-columns: 1fr;
      place-items: center;
    }

    .date {
      color: #666;
    }

    .links {
      justify-self: end;
      @media (max-width: 770px) {
        justify-self: center;
      }

      a {
        color: #666;
        text-transform: capitalize;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        border-right: 1px solid #666;
        transition: var(--transition);
        &:last-child {
          border-right: none;
        }
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;
