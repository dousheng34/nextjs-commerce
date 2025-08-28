import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="mb-4 text-2xl font-semibold">Главная</h1>
        <div className="grid gap-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-lg font-medium">План питания</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Ваши блюда на сегодня. Добавьте завтрак, обед или ужин.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-lg font-medium">Активность</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Шаги, тренировки и пульс. Подключите гаджеты для автосинхронизации.</p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-lg font-medium">Вода</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Сегодня выпито 0/8 стаканов. Сделайте первый глоток!</p>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-lg font-medium">Совет ИИ</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">«Попробуйте 5‑минутную медитацию перед сном для глубокого восстановления.»</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
