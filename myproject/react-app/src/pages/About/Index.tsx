import { Head } from '@inertiajs/react';
import * as React from 'react';

const Index = ({ name }): React.ReactNode => {
  return (
    <>
      <Head>
        <title>Your page title</title>
        <meta name="description" content="Your page description" />
      </Head>
      <div>
        <h1>D.I.R.T Stack Tutorial</h1>
        <p>The D.I.R.T Stack consists of 4 major pieces</p>
        <h1>Hi, {name}</h1>
      </div>
    </>
  );
};

export default Index;
