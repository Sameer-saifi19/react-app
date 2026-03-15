import Container from "./container";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <Container>
          <div className="h-16 flex items-center">navbar</div>
        </Container>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t">
        <Container>
          <div className="py-10">Footer</div>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
