import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-6">
      <h1 className="font-bold text-xl md:text-2xl">
        Dashboard de Vendas - Easysecrets
      </h1>

      <ThemeButton />
    </header>
  );
};

export default Header;
