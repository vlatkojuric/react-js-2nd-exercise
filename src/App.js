import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  const greeting = "there";
  const peeps = "plopers";
  <article>
    <h1>Hello{greeting}</h1>
    <p>World {peeps}</p>
  </article>;
  return (
    <article>
      <h1>Hello {greeting}</h1>
      <p>Mother {peeps}</p>
    </article>
  );
}
//import { createRoot } from "react-dom/client";

// This is the dom element that react will render into,
// per convention, it is usually a div with an id of "root".
//const rootElement = document.querySelector("#root");

// This is the react way to create a "root" that react can render into.
//const root = createRoot(rootElement);

// Call render on the root to render the elements into the DOM.
// Notice that this is NOT a template literal, it is JSX.

// Let's make a Greeting component
//function Greeting() {
//const name = "Surfers";
//return <h1 id="greeting">Hello {name}</h1>;
//}

//root.render(
//<div>
//<Greeting />
//<p className="intro">
// I am rendered by <strong>React</strong>
//</p>
//<div>Error?</div>
//</div>
//);
