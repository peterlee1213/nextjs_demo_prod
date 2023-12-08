import * as CONST from "./const";
import Header from "./_components/header";
import Content from "./_components/content";
import Footer from "./_components/footer";

const Home = async () => {
  return (
    <div>
      <header
        className="fixed w-full top-0 shadow-2xl z-50"
        style={{
          height: CONST.headerHeight,
          background: CONST.primaryColor,
        }}
      >
        <div style={CONST.containerStyle} className="flex justify-between">
          <Header></Header>
        </div>
      </header>
      <main>
        <Content></Content>
      </main>
      <footer>
        <div style={CONST.containerStyle}>
          <Footer></Footer>
        </div>
      </footer>
    </div>
  );
};

export default Home;
