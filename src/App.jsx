import "./App.css";
import MovieSection from "./components/MovieSection";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";
import TvShows from "./components/TvShows";

function App() {
  return (
    <>
      <TopBar />

      <TvShows />

      <MovieSection title="Trending Now" query="Harry Potter" />
      <MovieSection title="Watch it Again" query="The Lord of the Rings" />
      <MovieSection title="New Releases" query="Pirates of the Caribbean" />

      <MyFooter />
    </>
  );
}

export default App;
