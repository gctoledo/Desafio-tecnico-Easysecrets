import SalesChart from "./components/Chart";
import ChartSelector from "./components/ChartSelector";
import Container from "./components/Container";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />

      <main className="w-full flex flex-col gap-6 items-center justify-center">
        <ChartSelector />

        <Filters />

        <div className="w-full max-w-3xl">
          <SalesChart />
        </div>
      </main>
    </Container>
  );
}

export default App;
