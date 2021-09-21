import { useEffect } from "react";
import Page from "../../components/common/Page";
import Header from "../../components/pages/Home/Header";
import Content from "../../components/pages/Home/Content";
import Footer from "../../components/pages/Home/Footer";
import history from "../../utils/history";
import string from "../../utils/string";
import url from "../../utils/url";

export default function Home() {
  useEffect(() => {
    console.log("utils: ", history, string, url);
  }, []);

  return (
    <Page>
      <Header />
      <Content />
      <Footer />
    </Page>
  );
}
