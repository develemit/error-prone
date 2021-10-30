import { useEffect } from "react";

export default function Home({ setPageTitle }) {
  useEffect(() => {
    setPageTitle("Welcome Home!");
  });

  return <div>This is the Home Page!</div>;
}

Home.route = {
  path: "/",
  exact: true,
};
