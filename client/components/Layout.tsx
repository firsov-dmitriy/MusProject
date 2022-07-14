import { Container } from "@mui/system";
import { FC, ReactElement } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
