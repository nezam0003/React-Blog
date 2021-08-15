import styled from "styled-components";

export const NavbarStyled = styled.nav`
  background: var(--clr-white);
  box-shadow: var(--light-shadow);

  .navbar-container {
    @media screen and (min-width: 800px) {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      @media screen and (min-width: 800px) {
        padding: 0;
      }

      .logo {
        height: 40px;
        font-size: 1.5rem;
        font-weight: 600;
        color: #fcaf64;
        transition: var(--transition);

        &:hover {
          color: #e28f3c;
        }

        span {
          color: var(--clr-primary-1);
        }
      }
      .nav-toggle {
        font-size: 1.5rem;
        color: var(--clr-primary-5);
        background: transparent;
        border-color: transparent;
        transition: var(--transition);
        cursor: pointer;

        @media screen and (min-width: 800px) {
          display: none;
        }

        &:hover {
          color: var(--clr-primary-1);
        }
      }
    }

    .nav-button {
      display: none;
      border-radius: 1.5rem;
      padding: 0.5rem 1.5rem;
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;

      @media screen and (min-width: 800px) {
        display: inline-block;
      }

      &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
      }
    }

    .links-container {
      height: 0;
      overflow: hidden;
      transition: var(--transition);

      @media screen and (min-width: 800px) {
        height: auto !important;
      }

      .links {
        @media screen and (min-width: 800px) {
          display: flex;
        }
        a {
          color: var(--clr-grey-3);
          font-size: 1rem;
          font-weight: 500;
          text-transform: capitalize;
          display: block;
          padding: 0.5rem 1rem;
          transition: var(--transition);

          @media screen and (min-width: 800px) {
            padding: 0;
            margin: 0 0.8rem;
          }

          &:hover {
            background: var(--clr-primary-8);
            color: var(--clr-primary-5);
            padding-left: 1.5rem;

            @media screen and (min-width: 800px) {
              padding: 0;
              background: transparent;
            }
          }
        }
      }
    }
  }
`;
