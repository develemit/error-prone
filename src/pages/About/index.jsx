import { useEffect } from 'react';

function About({ setPageTitle }) {
  useEffect(() => {
    setPageTitle('About');
  }, []);
  return (
    <div>
      <p>This is where We'll tell you about how awesome this thing does</p>
      <p>And we'll have have lots of things to tell you!</p>
    </div>
  );
}

About.route = {
  path: '/about',
  exact: true,
};

export default About;
