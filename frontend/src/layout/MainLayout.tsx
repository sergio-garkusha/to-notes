import { NavLink, Outlet } from "react-router-dom";

import styled from "@emotion/styled";
import Logo from "../components/Logo";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

const author = import.meta.env.VITE_AUTHOR || "Author";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <NavLink
      to="/login"
      onClick={logout}
    >
      Logout
    </NavLink>
  );
};

export default function MainLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <main>
      <Section>
        <Header>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <HeaderMenu>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/authors">Authors</NavLink>
            </li>
            <li>{isAuthenticated ? <Logout /> : <NavLink to="/login">Login</NavLink>}</li>
          </HeaderMenu>
        </Header>
        <PageContent>
          <Sidebar />
          <MainContent>
            <Outlet />
          </MainContent>
        </PageContent>
        <footer>
          <FooterMenu>
            <FooterMenuLinks>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/authors">Authors</NavLink>
              </li>
            </FooterMenuLinks>
            <Copyright>© 2024 {author}</Copyright>
          </FooterMenu>
        </footer>
      </Section>
    </main>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Header = styled.header`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid black;
  padding: 10px 0px 10px 30px;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const HeaderMenu = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-right: 30px;
`;

const PageContent = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  height: 100%;
`;

const MainContent = styled.main`
  padding: 40px;
  width: 100%;
`;

const FooterMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 40px;

  a {
    color: white;
  }
`;

const Copyright = styled.p`
  color: white;
`;

const FooterMenuLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  list-style-type: none;
  padding: 0px;
`;
