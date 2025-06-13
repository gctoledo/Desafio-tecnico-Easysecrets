import ImplChart from "./components/Chart";
import ChartSelector from "./components/ChartSelector";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />

      <ChartSelector />

      <div className="w-full max-w-3xl">
        <ImplChart />
      </div>
    </Container>
  );
}

export default App;
