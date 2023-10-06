import { EventEmitter, Injectable } from '@angular/core';
import { Constants, CurrencyType, LanguageType } from '../configs/constants';
import { Store } from '@ngxs/store';
import { DataState } from 'src/app/shared/store/data/data.state';
import {
  CurrentCurrencyAction,
  CurrentLanguageAction,
} from 'src/app/shared/store/data/data.action';

@Injectable({ providedIn: 'root' })
export class Settings {
  /**
   *
   * CURRENT LANGUAGE
   */
  get language() {
    return this.store.selectSnapshot(DataState.currentLanguage);
  }
  set language(v: LanguageType) {
    this.store.dispatch(new CurrentLanguageAction(v));
  }

  /**
   *
   * CURRENT CURRENCY
   */
  get currency() {
    return this.store.selectSnapshot(DataState.currentCurrency);
  }
  set currency(v: CurrencyType) {
    this.store.dispatch(new CurrentCurrencyAction(v));
  }

  /**
   *
   */
  constructor(private store: Store) {}
}
