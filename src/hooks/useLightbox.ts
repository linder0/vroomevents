"use client";

import { useState, useCallback } from "react";

export function useLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  return { activeIndex, open, close, isOpen: activeIndex !== null } as const;
}
