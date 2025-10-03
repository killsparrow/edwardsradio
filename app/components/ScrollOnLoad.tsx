// app/components/ScrollOnLoad.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollOnLoad() {
  const params = useSearchParams();
  const to = params.get('to');

  useEffect(() => {
    if (!to) return;
    const el = document.getElementById(to);
    if (!el) return;
    // scroll, then clean the query from the URL
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState({}, '', '/');
  }, [to]);

  return null;
}
