import { Card } from "./Card";
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from "./Footer";

export function App() {
    return(
        <>
        <Navbar />
        <Header />
        <div className="container">
        <Content />
        <div className="row">
        </div>
        <div className="row py-5">
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/435/325/400'
              title = 'Titulo 1'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/444/325/400'
              title = 'Titulo 2'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/834/325/400'
              title = 'Titulo 3'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
          <div className="col-3">
            <Card
              image = 'http://picsum.photos/id/666/325/400'
              title = 'Titulo 4'
              paragraph = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, aperiam.'
            />
          </div>
        </div>
      </div>
      <Footer />
        </>
    )
}