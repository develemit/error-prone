import { useEffect } from "react";

export default function ContactUs({ setPageTitle }) {
  useEffect(() => {
    setPageTitle("The ContactUs Page!");
  });
  return <div>This is the ContactUs Page!</div>;
}

ContactUs.route = {
  path: "/contact-us",
  exact: true,
};
