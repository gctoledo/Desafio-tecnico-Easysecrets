interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center px-2 gap-6 md:px-6 py-4">
      {children}
    </div>
  );
};

export default Container;
