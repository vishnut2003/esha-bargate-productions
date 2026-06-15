// Offset to clear the sticky header (UtilityBar + shrunk header). Tunable.
export const HEADER_OFFSET = 100;

/**
 * Smoothly scroll to a section by id. Accepts either "about" or "#about".
 * Falls back to navigating home with the hash when the section isn't on the
 * current page (e.g. the shared header/footer rendered on a legal page).
 */
export function scrollToSection(target: string) {
  const id = target.startsWith("#") ? target.slice(1) : target;
  const el = document.getElementById(id);

  if (!el) {
    window.location.href = `/#${id}`;
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}
