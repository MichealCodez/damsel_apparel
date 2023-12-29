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
    <div className="category">
      <ul>
        {categories.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
