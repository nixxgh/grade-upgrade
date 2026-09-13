/**
 * Computes the current academic year dynamically.
 * If the current month is January to March (end of academic session),
 * it returns the ongoing session (e.g. 2025-26).
 * From April onwards (new session start), it returns the upcoming session (e.g. 2026-27).
 */
export function getAcademicYear(): string {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed: 0 = Jan, 3 = Apr

  // If before April, we're in the second half of the previous year's session
  const startYear = currentMonth < 3 ? currentYear - 1 : currentYear;
  const endYearShort = (startYear + 1).toString().slice(-2);

  return `${startYear}-${endYearShort}`;
}
