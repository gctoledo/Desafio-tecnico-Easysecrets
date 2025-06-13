/**
 * Obs:
 * Essa função serve simplesmente para evitar mutações indesejadas no estado
 * ao passar os dados para outras libs.
 *
 * - Gabriel Costa Toledo
 */

export function snapshotOf<T>(source: T): T {
  return JSON.parse(JSON.stringify(source));
}
