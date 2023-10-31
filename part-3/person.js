const Person = (props) => {
  let name = props.name.slice(0, 6);
  return (
    <div>
      <p>Learn some information about this person</p>
      {props.age >= 18 ? (
        <h3>{name} please go vote!</h3>
      ) : (
        <h3>{name} you must be 18</h3>
      )}
      <div>
        <h4>Hobbies</h4>
        <ul>
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
