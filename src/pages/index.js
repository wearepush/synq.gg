import * as React from "react";
import { Helmet } from "react-helmet";
import { Header, Section, Footer } from "../components";
import "../styles/global/index.scss";

const IndexPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>SYNQ</title>
        <meta
          name="description"
          content="Connects sport fans to what they love"
        />
      </Helmet>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default IndexPage;
