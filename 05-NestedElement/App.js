const element = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "child" }, "I am Nested Element")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
