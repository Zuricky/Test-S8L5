import "./App.css";
import MovieSection from "./components/MovieSection";
import MyFooter from "./components/MyFooter";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />

      <MovieSection title="Trending Now" query="Harry Potter" />
      <MovieSection title="Watch it Again" query="The Lord of the Rings" />
      <MovieSection title="New Releases" query="The Hobbit" />

      <MyFooter />
    </>
  );
}

export default App;
