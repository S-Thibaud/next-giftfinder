import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
