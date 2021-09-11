import React from "react";
import { Link } from "react-router-dom";
import { MdSend } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { footerMiddleImages } from "./data";
import styled from "styled-components";
const FooterMiddle = () => {
  return (
    <FooterMiddleStyled>
      <div className="container">
        <div className="row ">
          <div className="col mx-auto">
            <div className="row g-5">
              <div className="col-10  mx-auto mx-md-0 col-sm-6 col-md-3">
                <h4>our address</h4>
                <div className="address">
                  <ul>
                    <li>bengal software</li>
                    <li>House 452 (4th Floor), Road 31,</li>
                    <li>bashandara</li>
                    <li>Dhaka - 1206, Bangladesh</li>
                  </ul>
                </div>
              </div>
              <div className="col-10  mx-auto mx-md-0 col-sm-6 col-md-3">
                <h4>payment options</h4>
                <div className="payment">
                  {footerMiddleImages.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt="imagess"
                      className="img-fluid"
                    />
                  ))}
                </div>
              </div>
              <div className="col-10  mx-auto mx-md-0 col-sm-6 col-md-3">
                <h4>Subscribe Newsletter</h4>
                <div className="subscribe">
                  <p>Subscribe for new offers and updates</p>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-addon2"
                    >
                      <MdSend />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-10  mx-auto mx-md-0 col-sm-6 col-md-3">
                <h4>Connect with</h4>
                <p>To get updates follow us on Facebook, Twitters etc.</p>
                <div className="connect">
                  <Link exact to="/">
                    <FaFacebook />
                  </Link>
                  <Link exact to="/">
                    <FaTwitter />
                  </Link>
                  <Link exact to="/">
                    <FaLinkedin />
                  </Link>
                  <Link exact to="/">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterMiddleStyled>
  );
};

export default FooterMiddle;

const FooterMiddleStyled = styled.div`
  background: #111;
  padding-bottom: 2rem;
  p {
    text-transform: capitalize;
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }

  h4 {
    font-family: "Rubik", sans-serif;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }
  .address {
    ul {
      padding-left: 0;
      li {
        font-size: 0.925rem;
        display: block;
        text-transform: capitalize;
        color: #666;
        transition: var(--transition);
      }
    }
  }

  .payment {
    display: flex;
    flex-wrap: wrap;
    img {
      margin: 0.5rem 0.5rem 0.5rem 0rem;
    }
  }
  .subscribe {
    p {
      font-size: 0.9rem;
    }
  }
  .connect {
    a {
      font-size: 1.5rem;
      color: #666;
      transition: var(--transition);
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: #fff;
      }
    }
  }
`;
