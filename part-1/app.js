const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Zane" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
