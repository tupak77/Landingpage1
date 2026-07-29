// Pure, testable helpers for the promo landing page.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate an email address for the promo signup form.
 * @param {string} value raw input value
 * @returns {boolean} true when the value looks like a valid email
 */
export function isValidEmail(value) {
  if (typeof value !== 'string') return false;
  return EMAIL_RE.test(value.trim());
}

/**
 * Build the user-facing message shown after a signup attempt.
 * @param {string} value raw email input value
 * @returns {{ ok: boolean, message: string }}
 */
export function buildSignupResult(value) {
  if (isValidEmail(value)) {
    return {
      ok: true,
      message: '¡Genial! Te hemos apuntado a la promo. Revisa tu correo.',
    };
  }
  return {
    ok: false,
    message: 'Introduce un correo válido para recibir la promo.',
  };
}
