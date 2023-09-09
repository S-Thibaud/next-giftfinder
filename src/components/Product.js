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
        className="absolute inset-0 w-full md:h-100 lg:h-200 object-cover rounded-xl transition-opacity duration-300 hover:opacity-70"
      />
      <div className="absolute bottom-0 w-full text-center text-black text-md bg-white p-2 flex">
        <h1 className="w-3/5 text-left">{item.productnaam}</h1>
        <h1 className="w-2/5 text-right">€ {item.productprijs}</h1>
      </div>
    </li>

    // <li
    //   key={key}
    //   className="relative flex items-center justify-center h-80"
    //   onClick={() => handleCategoryClick(item.productlink)}
    // >
    //   <div className="w-full h-full relative p-2 bg-gray-200 rounded-xl">
    //     <div className="p-2">
    //       <img
    //         src={item.productfoto}
    //         alt=""
    //         className="w-full h-full object-contain rounded-xl transition-opacity duration-300 hover:opacity-50"
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute bottom-0 w-full text-center text-black text-md bg-white p-2">
    //     <h1 className="text-left">{item.productnaam}</h1>
    //     <h1 className="text-right">€ {item.productprijs}</h1>
    //   </div>
    // </li>
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
