import { useEffect } from 'react';

function ContactUs({ setPageTitle }) {
  useEffect(() => {
    setPageTitle('The ContactUs Page!');
  }, []);
  return <div>This is the ContactUs Page!</div>;
}

ContactUs.route = {
  path: '/contact',
  exact: true,
};

export default ContactUs;
