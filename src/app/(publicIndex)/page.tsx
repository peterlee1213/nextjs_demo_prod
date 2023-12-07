import * as CONST from "./const";
import { Container } from "@mui/material";
import Header from "./_components/header";
import Content from "./_components/content";
import Footer from "./_components/footer";

const containerStyle: React.CSSProperties = {
  maxWidth: CONST.maxContentWidth,
  overflow: "hidden",
};

function Home() {
  return (
    <div>
      <header
        className="fixed w-full top-0 shadow-2xl z-10"
        style={{
          height: CONST.headerHeight,
          background: CONST.primaryColor,
        }}
      >
        <Container style={containerStyle} className="flex justify-between">
          <Header></Header>
        </Container>
      </header>
      <main>
        <Content></Content>
      </main>
      <footer>
        <Container style={containerStyle}>
          <Footer></Footer>
        </Container>
      </footer>
    </div>
  );
}

export { containerStyle };
export default Home;
