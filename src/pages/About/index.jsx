import { useEffect } from "react";

const aboutThings = [
  { title: "Topic One", checked: true },
  { title: "Topic Two", checked: false },
  { title: "Topic There", checked: true },
];

export default function About({ setPageTitle }) {
  useEffect(() => {
    setPageTitle("About");
  });

  const renderAbouts = aboutThings.map((thing) => {
    return <li key={thing.title}>{thing.title}</li>;
  });

  return (
    <div>
      <p>This is where We'll tell you about how awesome this thing does</p>
      <p>And we'll have have lots of things to tell you!</p>
      <ul>{renderAbouts}</ul>
    </div>
  );
}

About.route = {
  path: "/about",
  exact: true,
};
