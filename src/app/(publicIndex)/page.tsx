import * as CONST from "./const.ts";
import { Container } from "@mui/material";
import Header from "./_components/header.ts";
import Content from "./_components/content.ts";
import Footer from "./_components/footer.ts";

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
        <Container
          style={CONST.containerStyle}
          className="flex justify-between"
        >
          <Header></Header>
        </Container>
      </header>
      <main>
        <Content></Content>
      </main>
      <footer>
        <Container style={CONST.containerStyle}>
          <Footer></Footer>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
