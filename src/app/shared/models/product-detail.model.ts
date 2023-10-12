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
}

interface ItemsType {
  type: string;
  product: ProductItem[];
}

interface ProductItem extends Id {
  title: LanguageModel;
  price: Price;
  image: string;
}

export interface ImageItem extends Id {
  image: string;
}

interface ProductFeature extends Id {
  image: string;
  features: Feature[];
}

interface Feature {
  id: 5;
  feature: LanguageModel;
}
