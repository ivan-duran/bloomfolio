import { getCollection, type CollectionEntry } from "astro:content";
import { localizePath, type Locale } from "./index";

type LocalizedCollection =
  | "about"
  | "education"
  | "hackathons"
  | "projects"
  | "work";

export async function getLocalizedCollection<T extends LocalizedCollection>(
  collection: T,
  locale: Locale,
): Promise<CollectionEntry<T>[]> {
  return getCollection(collection, ({ data }) => {
    // @ts-ignore - draft might not exist on all collections, but if it does and is true, filter it
    if (data.draft === true) return false;
    return data.lang === locale;
  });
}

export async function getLocalizedEntry<T extends LocalizedCollection>(
  collection: T,
  locale: Locale,
  routeSlug: string,
): Promise<CollectionEntry<T> | undefined> {
  const entries = await getLocalizedCollection(collection, locale);
  return entries.find((entry) => entry.data.routeSlug === routeSlug);
}

export async function getEntryAlternatePaths<T extends LocalizedCollection>(
  collection: T,
  routeSlug: string,
  pathFactory: (routeSlug: string) => string,
): Promise<Partial<Record<Locale, string>>> {
  const entries = await getCollection(
    collection,
    ({ data }) => data.routeSlug === routeSlug,
  );

  return Object.fromEntries(
    entries.map((entry) => [
      entry.data.lang,
      localizePath(pathFactory(entry.data.routeSlug), entry.data.lang),
    ]),
  );
}
