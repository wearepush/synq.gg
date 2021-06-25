import * as React from "react";
import { Helmet } from "react-helmet";
import { Header, Section, Footer } from "../components";
import "../styles/global/index.scss";

import data from '../data';

const key = 'community';

const Community = () => {
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
      <Header title={data[key].headerTitle} />
      <Section pageKey={key} {...data[key]} />
      <Footer />
    </>
  );
};

export default Community;
