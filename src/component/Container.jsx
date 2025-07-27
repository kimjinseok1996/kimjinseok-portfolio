const containerStyle = {
  maxWidth: "768px",
  margin: "0 auto",
  padding: "0 16px",
};
function Container({ children }) {
  return (
    <div id="container" style={containerStyle}>
      {children}
    </div>
  );
}

export default Container;
