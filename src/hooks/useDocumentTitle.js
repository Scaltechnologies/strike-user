import { useEffect } from "react";

export const SITE_TITLE = "STRIKE";

// Sets "<page> | STRIKE" while the page is mounted, restoring the site title after.
export function useDocumentTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${SITE_TITLE}` : SITE_TITLE;
    return () => {
      document.title = SITE_TITLE;
    };
  }, [page]);
}
