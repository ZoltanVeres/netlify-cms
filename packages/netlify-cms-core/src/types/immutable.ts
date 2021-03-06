export interface StaticallyTypedRecord<T> {
  get<K extends keyof T>(key: K, defaultValue?: T[K]): T[K];
  set<K extends keyof T, V extends T[K]>(key: K, value: V): StaticallyTypedRecord<T> & T;
  has<K extends keyof T>(key: K): boolean;
  delete<K extends keyof T>(key: K): StaticallyTypedRecord<T>;
  getIn<K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(
    keys: [K1, K2],
    defaultValue?: V,
  ): T[K1][K2];
  getIn<
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    V extends T[K1][K2][K3]
  >(
    keys: [K1, K2, K3],
    defaultValue?: V,
  ): T[K1][K2][K3];
  toJS(): T;
  isEmpty(): boolean;
  some<K extends keyof T>(predicate: (value: T[K], key: K, iter: this) => boolean): boolean;
  mapKeys<K extends keyof T, V>(mapFunc: (key: K, value: StaticallyTypedRecord<T>) => V): V[];
  find<K extends keyof T>(findFunc: (value: T[K]) => boolean): T[K];
}
