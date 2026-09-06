import type { ReactNode } from 'react';

const classes = {
  hausse: 'puce puce-hausse',
  alerte: 'puce puce-alerte',
  neutre: 'puce puce-neutre',
} as const;

export default function Puce({
  ton = 'neutre',
  children,
}: {
  ton?: keyof typeof classes;
  children: ReactNode;
}) {
  return <span className={classes[ton]}>{children}</span>;
}
