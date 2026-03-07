import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const saved = localStorage.getItem('mds-theme') as Theme | null;
            if (saved === 'light' || saved === 'dark') return saved;
        } catch { /* ignore */ }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('mds-theme', theme); } catch { /* ignore */ }
    }, [theme]);

    const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    return { theme, toggle };
}
