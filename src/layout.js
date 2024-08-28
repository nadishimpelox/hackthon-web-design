import React from 'react';
import Home from './home';
import Casual from './casual-page';
import Formal from './formal-page';
import Footer from './footer';

const Layout = (props) => {
  return (
<>
<Home />
<Casual />
<Formal />
<Footer />
</>
  );
};

export default Layout;
