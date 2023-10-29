import { Price } from './price.model';

export interface OrderRequest {
  configurator: number | null;
  product: number;
  quantity: number | undefined;
  price: Price;
}
