import { useEffect } from "react";

export default function NotFound({ setPageTitle }) {
  useEffect(() => {
    setPageTitle("Are you lost!?");
  });
  return <div>Sorry! Page not found!</div>;
}

NotFound.route = {
  path: "*",
};
