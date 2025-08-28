// Shopify-зависимые вызовы отключены в демо без конфигурации
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { defaultSort, sorting } from 'lib/constants';

export async function generateMetadata(props: { params: Promise<{ collection: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {
    title: params.collection,
    description: `Коллекция ${params.collection}`
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products: any[] = [];

  return (
    <section>
      <p className="py-3 text-sm text-neutral-600 dark:text-neutral-400">
        Коллекции недоступны в этом превью без Shopify конфигурации.
      </p>
    </section>
  );
}
