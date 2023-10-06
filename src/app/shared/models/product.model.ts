import { Id } from './id.model';
import { LanguageModel } from './language.model';

export interface Product extends Id {
  category: number;
  title: LanguageModel;
  image: string;
  price: number;
}
