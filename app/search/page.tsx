import { defaultSort, sorting } from 'lib/constants';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  // В демо-режиме без Shopify возвращаем пустой результат
  const products: any[] = [];
  const resultsText = 'results';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? null : (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Поиск товаров недоступен в этом превью. Подключите Shopify для результатов.
        </p>
      )}
    </>
  );
}
