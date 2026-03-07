/**
 * Returns the correct image URL relative to the Vite base path.
 * Required for GitHub Pages project sites where base = '/mydentalstory/'.
 * In dev: BASE_URL = '/', in prod: BASE_URL = '/mydentalstory/'
 */
const BASE = import.meta.env.BASE_URL;

export const img = (path: string): string => {
    const clean = path.startsWith('/') ? path.slice(1) : path;
    return `${BASE}${clean}`;
};
