import { Bell } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import Container from "./container";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen">
      <header className="border-b shadow-xs">
        <Container>
          <div className="h-20 flex items-center justify-between">
            <div>
              <h1 className="font-bold text-3xl uppercase">logo</h1>
            </div>

            <div className="flex gap-12">
              <a href="/">Home</a>
              <Link to={"/about"}>About</Link>
              <a href="/">Contact</a>
              <a href="/">Solutions</a>
            </div>

            <div className="flex gap-2">
              <Button variant={"ghost"} size={"icon-lg"}>
                <HugeiconsIcon icon={Bell} size={24} color="red" />
              </Button>
              <Button size={"lg"} variant={"outline"}>
                Login
              </Button>
              <Button size={"lg"}>Register</Button>
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
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
