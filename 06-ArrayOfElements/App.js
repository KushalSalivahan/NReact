const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 element"),
    React.createElement("h2", {}, "I am h2 Element"),
  ]),
  React.createElement("div", { id: "child2" },[
    React.createElement("h1", {}, "I am h1 element"),
    React.createElement("h2", {}, "I am h2 Element"),
  ]),
]);


root.render(parent);