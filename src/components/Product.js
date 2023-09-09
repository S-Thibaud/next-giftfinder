const handleCategoryClick = (link) => {
  window.location.href = link;
};

const Product = ({ key, item }) => {
  return (
    <li
      key={key}
      className="relative flex items-center justify-center h-80"
      onClick={() => handleCategoryClick(item.productlink)}
    >
      <img
        src={item.productfoto}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 hover:opacity-50"
      />
      <h1 className="absolute text-black text-3xl">{item.productnaam}</h1>
      <h1 className="absolute text-black text-3xl">{item.productprijs}</h1>
    </li>
  );
};

// echo '<a id="clickable" href="' . $data['linkproduct'] . '" target="_blank">';
// echo '<article>';
// echo '<div class="fotocontainer">';
// echo '<img id="fotoproduct" src="' . $data['foto'] . '" alt="">';
// echo '</div>';
// echo '<h1 id="naamproduct" >' . $data['naam'] . '</h1>';
// echo '<h1 id="prijsproduct">€ ' . $data['prijs'] . '</h1>';
// echo '</article>';
// echo '</a>';

export default Product;
