import { describe, it, expect } from 'vitest';
import { isValidEmail, buildSignupResult } from './promo.js';

describe('isValidEmail', () => {
  it('accepts a well-formed address', () => {
    expect(isValidEmail('pescador@correo.com')).toBe(true);
  });

  it('trims surrounding whitespace', () => {
    expect(isValidEmail('  pescador@correo.com  ')).toBe(true);
  });

  it('rejects a missing domain', () => {
    expect(isValidEmail('pescador@')).toBe(false);
  });

  it('rejects empty and non-string values', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(42)).toBe(false);
  });
});

describe('buildSignupResult', () => {
  it('returns a success message for a valid email', () => {
    const result = buildSignupResult('pescador@correo.com');
    expect(result.ok).toBe(true);
    expect(result.message).toMatch(/apuntado/i);
  });

  it('returns an error message for an invalid email', () => {
    const result = buildSignupResult('nope');
    expect(result.ok).toBe(false);
    expect(result.message).toMatch(/correo válido/i);
  });
});
