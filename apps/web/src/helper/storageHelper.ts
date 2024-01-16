class StorageService {
  constructor() {}

  setItem<T>(key: string, item: T): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem<T>(key: string): T {
    if (typeof window !== 'undefined') {
      const data: any = localStorage?.getItem(key);
      if (!data) return null as T;

      let obj: T;

      try {
        obj = (<T>JSON.parse(data)) as T;
      } catch (error) {
        obj = null as T;
      }

      return obj;
    } else {
      return null as T;
    }
  }
}
export const storageService = new StorageService();
