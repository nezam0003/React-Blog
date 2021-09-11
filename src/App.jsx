import React from "react";

import { Switch, Route } from "react-router-dom";

import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/home/Home";
import Features from "./page/feature/Features";
import Price from "./page/price/Price";
import Testiminial from "./page/testiminial/Testiminial";
import FrequentlyAskedQuestion from "./page/faq/FrequentlyAskedQuestion";
import ErrorPage from "./page/ErrorPage";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/testiminial" component={Testiminial} />
          <Route exact path="/faq" component={FrequentlyAskedQuestion} />
          <Route component={ErrorPage} />
        </Switch>
      </MainContent>
      <Footer />
    </>
  );
};

const MainContent = styled.section`
  min-height: calc(100vh-74px);
  width: 100vw;
  padding: 3rem 0rem;
`;

export default App;
