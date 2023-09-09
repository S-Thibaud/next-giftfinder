import { NextRouter, useRouter } from 'next/router';

const Category = ({ title, image }: { title: string; image: string }) => {
  const router: NextRouter = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/category/${category.toLocaleLowerCase()}`);
  };

  return (
    <div className="relative flex items-center justify-center h-80">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 hover:opacity-50"
        onClick={() => handleCategoryClick(title)}
      />
      <span className="absolute text-white text-3xl">{title}</span>
    </div>
  );
};

export default Category;
