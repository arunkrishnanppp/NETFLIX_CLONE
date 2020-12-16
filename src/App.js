import Rect from "react";
import "./Styles/App.css";
import Row from "./Components/Row";
import requestes from "./middlewares/request";
import requests from "./middlewares/request";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      {/* {NavBar} */}
      <Nav></Nav>
      {/* {BAnner} */}
      <Banner></Banner>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetcNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending}></Row>
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated}></Row>
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies}></Row>
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row
        title={"Romance Movies"}
        fetchUrl={requests.fetchRomanceMovies}
      ></Row>
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries}></Row>
      <div className="App">..</div>
    </div>
  );
}

export default App;
