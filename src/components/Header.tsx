import Container from "./Container";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="w-full h-16 bg-primary flex items-center justify-center">
      <Container className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-white">Dashboard de Vendas</h1>

        <ThemeButton />
      </Container>
    </header>
  );
};

export default Header;
