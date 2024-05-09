function Track({ name, album, children }) {
  return (
    <div>
      <p>{name}</p>
      <p>{album}</p>
      {children}
    </div>
  );
}
export default Track;
