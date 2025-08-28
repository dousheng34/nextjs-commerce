export const metadata = { title: 'Тренировка' };

export default function TrainPage() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-4 text-2xl font-semibold">Тренировки</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Выбор программы и запуск сессии с AI‑тренером. Во время активной сессии таб‑бар скрывается.
      </p>
    </div>
  );
}

