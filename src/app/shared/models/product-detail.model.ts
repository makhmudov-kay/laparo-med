import { Id } from './id.model';
import { LanguageModel } from './language.model';
import { Price } from './price.model';

export interface ProductDetail extends Id {
  category: number;
  title: LanguageModel;
  information: LanguageModel;
  price: number;
  configurator: any; //what type?
  items: ItemsType[];
  product_images: ImageItem[];
  product_video: string;
  product_description: string;
  product_features: ProductFeature;
  main_item: ProductItem;
}

export interface ItemsType {
  type: string;
  product: ProductItem[];
  isOpened?: boolean;
}

export interface ProductItem extends Id {
  title: LanguageModel;
  price: Price;
  image: string;
  count?: number;
  totalPrice?: Price;
}

export interface ImageItem extends Id {
  image: string;
}

export interface ProductFeature extends Id {
  image: string;
  features: Feature[];
}

export interface Feature extends Id {
  feature: LanguageModel;
}
