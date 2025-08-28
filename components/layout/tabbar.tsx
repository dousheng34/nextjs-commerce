"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type TabItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent?: boolean;
};

const BlueActive = '#3498DB';
const GreenAccent = '#2ECC71';

function IconHome(props: { active: boolean }) {
  const color = props.active ? BlueActive : '#8E8E93';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function IconFood(props: { active: boolean }) {
  const color = props.active ? BlueActive : '#8E8E93';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2v9m0 0c0 2.761-2.239 5-5 5V7c2.761 0 5 2.239 5 5zm10-3v14m0-14a3 3 0 0 1-3 3h6a3 3 0 0 1-3-3z" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconTrain(props: { active: boolean }) {
  const color = props.active ? BlueActive : '#FFFFFF';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16l6-9 6 9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconProgress(props: { active: boolean }) {
  const color = props.active ? BlueActive : '#8E8E93';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12a9 9 0 1 0 9-9" stroke={color} strokeWidth="1.5"/>
      <path d="M12 3v9l6 3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconNeuro(props: { active: boolean }) {
  const color = props.active ? BlueActive : '#8E8E93';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-4.418 0-8 2.91-8 6.5S7.582 15 12 15s8-2.91 8-6.5S16.418 2 12 2z" stroke={color} strokeWidth="1.5"/>
      <path d="M5 20c3-3 11-3 14 0" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function TabBar() {
  const pathname = usePathname();

  const items: TabItem[] = [
    { href: '/', label: 'Главная', icon: <IconHome active={pathname === '/'} /> },
    { href: '/nutrition', label: 'Питание', icon: <IconFood active={pathname?.startsWith('/nutrition') ?? false} /> },
    {
      href: '/train',
      label: 'Тренировка',
      icon: <IconTrain active={pathname?.startsWith('/train') ?? false} />,
      accent: true
    },
    { href: '/progress', label: 'Прогресс', icon: <IconProgress active={pathname?.startsWith('/progress') ?? false} /> },
    { href: '/neuro', label: 'Нейро', icon: <IconNeuro active={pathname?.startsWith('/neuro') ?? false} /> }
  ];

  return (
    <nav
      className={clsx(
        'fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-neutral-800 dark:bg-neutral-900/95 dark:supports-[backdrop-filter]:bg-neutral-900/70'
      )}
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-5 items-center gap-1 p-2">
        {items.map((item) => {
          const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          const isAccent = item.accent === true;
          return (
            <li key={item.href} className="flex h-12 items-center justify-center">
              <Link
                href={item.href}
                className={clsx(
                  'flex flex-col items-center justify-center rounded-full px-3 py-2 text-[11px] font-medium',
                  active && !isAccent && 'text-[color:var(--blue-active)]',
                  !active && !isAccent && 'text-neutral-500',
                  isAccent && 'h-12 w-12 rounded-full bg-[color:var(--green-accent)] text-white shadow-lg'
                )}
                style={{
                  // CSS variables for color tokens
                  ['--blue-active' as any]: BlueActive,
                  ['--green-accent' as any]: GreenAccent
                }}
              >
                <div className="flex items-center justify-center">{item.icon}</div>
                {!isAccent && <span className="mt-1">{active ? item.label : ''}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

