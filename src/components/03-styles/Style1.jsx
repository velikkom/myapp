const Style1 = () => {
  const isRadius = false;
  const padding = "20px";

  return (
    <div>
      <h1>style1</h1>

      <h2
        style={{
          color: "red",
          backgroundColor: "yellow",
          textShadow: "2px 2px 4px #000000",
          textAlign: "center",
          fontSize: "20px",
          border: "1px solid black",
          borderRadius: isRadius ? "10px" : "50px",
          padding,
          boxShadow: "2px 2px 4px green",

        }}
      >
        Inline Styles
      </h2>
    </div>
  );
};

export default Style1;
