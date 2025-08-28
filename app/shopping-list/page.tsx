export const metadata = { title: 'Список покупок' };

export default function ShoppingListPage() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-semibold">Список покупок</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Автогенерация по плану питания, группировка по отделам и кнопка «Заказать доставку».
      </p>
    </div>
  );
}

