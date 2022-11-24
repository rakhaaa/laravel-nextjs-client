// import Navbar
import NavbarComp from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarComp />
      <main>{children}</main>
    </>
  );
}
