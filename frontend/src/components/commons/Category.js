import "./common.css";

function Category() {
  const categories = [
    "All Products",
    "Bonstraight",
    "Pixie Curls",
    "Deep Curls",
    "Short Bob",
    "Straight Wig",
  ];
  return (
    <ul className="category">
      {categories.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}

export default Category;
