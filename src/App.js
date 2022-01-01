import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";
import JobsSearch from "./components/Jobs/JobsSearch/JobsSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <JobsSearch />
      <Jobs />
    </div>
  );
}

export default App;