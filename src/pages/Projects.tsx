import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Outlet />
      <h1>Projects</h1>
    </>
  );
}
