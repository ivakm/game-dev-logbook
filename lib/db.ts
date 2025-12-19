// TODO we will replace it with a real DB in the future

const DB_NAME = "game-dev-hub";
const DB_VERSION = 1;

const STORES = ["articles", "games", "auth"] as const;
type StoreName = "articles" | "games" | "auth";

let dbPromise: Promise<IDBDatabase> | null = null;

export function openDB(): Promise<IDBDatabase> {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((res, rej) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      STORES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: "id" });
        }
      });
    };

    request.onsuccess = () => res(request.result);
    request.onerror = () => rej(request.error);
  });

  return dbPromise;
}

export async function getAll<T>(store: StoreName): Promise<T[]> {
  const db = await openDB();

  return new Promise((res, rej) => {
    const transaction = db.transaction(store, "readonly");
    const request = transaction.objectStore(store).getAll();

    request.onsuccess = () => res(request.result);
    request.onerror = () => rej(request.error);
  });
}

export async function getById<T>(store: StoreName, id: string): Promise<T | undefined> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, "readonly");
    const request = transaction.objectStore(store).get(id);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function put<T extends { id: string }>(store: StoreName, value: T): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, "readwrite");
    transaction.objectStore(store).put(value);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

export async function remove(store: StoreName, id: string): Promise<void> {
  const db = await openDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, "readwrite");
    transaction.objectStore(store).delete(id);

    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}
