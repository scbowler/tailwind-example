import React from 'react';

export default function Header(props) {
  return (
    <header className="pt-16">
      <h1 className="text-center text-blue-400 text-5xl">{props.title}</h1>
    </header>
  );
}
