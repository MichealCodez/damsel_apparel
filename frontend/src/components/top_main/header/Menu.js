function Menu() {
  const cat = [
    "Hair Accessories",
    "Bonestraight",
    "Deep Curls",
    "Pixie Curls",
    "Short Bob",
    "Straight Wig",
    "Perfume",
  ];
  return (
    <ul className="menu">
      {cat.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}

export default Menu;
