import NavbarClient from "../components/NavbarClient";


export default function Layout({ children }) {
  return (
    <>
      <NavbarClient />
      <main>{children}</main>
    </>
  );
}
