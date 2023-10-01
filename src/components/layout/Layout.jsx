/* eslint-disable react/prop-types */
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
