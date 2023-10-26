const handleCategoryClick = (link) => {
  window.location.href = link;
};

const Product = ({ item }) => {
  return (
    <li
      // key={key}
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
  );
};

export default Product;
