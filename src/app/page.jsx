import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h1>Hello World!</h1>
      </Container>
      <Footer />
    </>
  );
}
