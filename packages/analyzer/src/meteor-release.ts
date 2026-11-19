/**
 * Parses the contents of a Meteor project's `.meteor/release` file.
 *
 * Examples of valid contents:
 *   "METEOR@3.0.4"
 *   "METEOR@2.16"
 *   "METEOR@3.1-beta.1"
 */
export interface MeteorRelease {
  /** Full version string, e.g. "3.0.4" or "3.1-beta.1". */
  version: string;
  /** Major version number, e.g. 3. */
  major: number;
}

const RELEASE_PATTERN = /^METEOR@(\d+)(\.\d+)*(-[\w.]+)?$/;

export function parseMeteorRelease(content: string): MeteorRelease | null {
  const line = content
    .split(/\r?\n/)
    .map((l) => l.trim())
    .find((l) => l.length > 0 && !l.startsWith("#"));

  if (!line || !RELEASE_PATTERN.test(line)) {
    return null;
  }

  const version = line.slice("METEOR@".length);
  const major = Number.parseInt(version, 10);
  return { version, major };
}
