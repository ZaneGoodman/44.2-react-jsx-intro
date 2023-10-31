const Tweet = (props) => {
  return (
    <div>
      <h2>{props.username}</h2>
      <span>
        <h4>
          {props.name} {props.date}
        </h4>
      </span>
      <p>{props.message}</p>
    </div>
  );
};
