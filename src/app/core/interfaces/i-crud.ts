export interface ICrud<T> {
  add(item: T): void;
  update(item: T): void;
  delete(item: T): void;
  findAll(): T[];
  findOne(id: number): T | null;
}
