import ProductFilterForm from '@/components/Forms/ProductFilterForm/ProductFilterForm';
import Category from '@/components/Category/Category';

export default function Home() {
  return (
    <>
      <ProductFilterForm />

      <div className="grid grid-cols-2 gap-4 p-5">
        <Category title="Games" image="/images/rfgames.webp" />
        <Category title="Fashion" image="/images/rffashion.webp" />
        <Category title="Toys" image="/images/rftoys.webp" />
        <Category title="Sports" image="/images/rfsport.webp" />
        <Category title="Animals" image="/images/rfanimals.jpeg" />
        <Category title="Books" image="/images/rfbooks.webp" />
      </div>
    </>
  );
}
