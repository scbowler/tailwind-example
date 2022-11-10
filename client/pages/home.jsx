import React from 'react';
import Header from '../components/header';

export default function Home(props) {
  return (
    <div className="container mx-auto">
      <Header title="Tailwind Example!" />
      <div className="text-center py-10">
        <button className="btn btn-blue">Custom CSS Button</button>
      </div>
    </div>
  );
}
