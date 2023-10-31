const App = () => (
  <div>
    <Person name="zane" age={23} hobbies={["software", "juggling", "work"]} />
    <Person
      name="gage"
      age={17}
      hobbies={["baseball", "videogames", "school"]}
    />
    <Person
      name="colton"
      age={13}
      hobbies={["friends", "videogames", "naruto"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
