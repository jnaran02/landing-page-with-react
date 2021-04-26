import Card from './components/Card';
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <div className="row py-3">
          <Card
            image="http://picsum.photos/id/435/325/400"
            title="Titulo 1"
            paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam."
          />
          <Card
            image="http://picsum.photos/id/444/325/400"
            title="Titulo 2"
            paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam."
          />
          <Card
            image="http://picsum.photos/id/834/325/400"
            title="Titulo 3"
            paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam."
          />
          <Card
            image="http://picsum.photos/id/666/325/400"
            title="Titulo 4"
            paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam."
          />
        </div>
        <Content />
      </div>
      <Footer />
    </>
  );
}
