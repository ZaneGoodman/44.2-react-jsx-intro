const App = () => (
  <div>
    <Tweet
      username="zgood"
      name="zane"
      date="08/10/2000"
      message="I went to the store"
    />
    <Tweet
      username="Jgran"
      name="jennifer"
      date="09/22/1981"
      message="Isn't family great"
    />
    <Tweet
      username="ggood"
      name="gage"
      date="10/13/2006"
      message="Who has the next video game?"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
