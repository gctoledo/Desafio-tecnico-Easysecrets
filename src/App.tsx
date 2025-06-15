import SalesChart from "./components/SalesChart";
import ChartSelector from "./components/ChartSelector";
import Container from "./components/Container";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Header />

      <Container className="flex min-h-[calc(100vh_-_128px)] items-center py-4">
        <main className="w-full space-y-6 flex flex-col">
          <Filters />

          <Stats />

          <ChartSelector />

          <SalesChart />
        </main>
      </Container>

      <Footer />
    </>
  );
}

export default App;
