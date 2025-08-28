import { baseUrl } from 'lib/utils';

export const metadata = { title: 'QR код' };

export default async function QRPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const to = (searchParams?.to as string) || '';
  const targetUrl = to.length > 0 ? to : baseUrl;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${encodeURIComponent(
    targetUrl
  )}`;

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-semibold">QR код</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Наведите камерой телефона, чтобы открыть: <span className="font-medium">{targetUrl}</span>
      </p>
      <img
        src={qrSrc}
        alt="QR code"
        width={256}
        height={256}
        className="h-64 w-64 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"
      />
      <div className="text-xs text-neutral-600 dark:text-neutral-400">
        Можете передать свою ссылку: <code>?to=https://example.com</code>
      </div>
      <a
        href={targetUrl}
        className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-900"
      >
        Открыть ссылку
      </a>
    </div>
  );
}

