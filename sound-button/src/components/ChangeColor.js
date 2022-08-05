const ChangeColor = (props) => {
  const { color } = props;
  if (color === "qizil") {
    return (
      <h1 className="navbar-brand" style={{ color: "red" }}>
        ISYSTEM
      </h1>
    );
  } else if (color === "yaxshil") {
    return (
      <h1 className="navbar-brand" style={{ color: "green" }}>
        ISYSTEM
      </h1>
    );
  } else if (color === "oq") {
    return (
      <h1
        className="navbar-brand"
        style={{ color: "white", border: "1px solid black" }}
      >
        ISYSTEM
      </h1>
    );
  } else if (color === "ko'k") {
    return (
      <h1 className="navbar-brand" style={{ color: "blue" }}>
        ISYSTEM
      </h1>
    );
  } else if (color === "sariq") {
    return (
      <h1 className="navbar-brand" style={{ color: "yellow" }}>
        ISYSTEM
      </h1>
    );
  } else {
    return (
      <h1 className="navbar-brand" style={{ color: "black" }}>
        ISYSTEM
      </h1>
    );
  }
};

export default ChangeColor;
