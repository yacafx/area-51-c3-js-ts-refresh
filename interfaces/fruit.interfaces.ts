export interface Fruit<T> {
  name: string;
  color: string;
  status: boolean;
  id: string | number;
  saleStatus: T;
}
