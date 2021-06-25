import {useEffect} from "react";
import { navigate } from "gatsby"
import "../styles/global/index.scss";

const IndexPage = () => {
  useEffect(() => {
    navigate('/intheknow');
  }, [])
  return null
};

export default IndexPage;
