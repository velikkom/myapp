export const Style2 = () => {
  const isRadius = false;
  const padding = "20px";

  const titleStyle = {
    color: "red",
    backgroundColor: "yellow",
    textShadow: "2px 2px 4px #000000",
    textAlign: "center",
    fontSize: "20px",
    border: "1px solid black",
    borderRadius: isRadius ? "10px" : "50px",
    padding,
    boxShadow: "2px 2px 4px green",
  };

  return (
    <div>
      <h1 style={titleStyle}>Style1</h1>

      <h2 style={titleStyle}>Internal Styles </h2>
    </div>
  );
};


