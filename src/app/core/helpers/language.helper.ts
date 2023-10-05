export type LanguageType = 'uz' | 'ru' | 'en';
export const LanguageList: LanguageType[] = ['uz', 'ru', 'en'];
export const DEFAULT_LANGUAGE = 'uz';

export class LanguageHelper {
  /**
   *
   * CURRENT LANGUAGE
   */
  private static _currentLangauge = localStorage.getItem(
    'currentLanguage'
  ) as LanguageType | null;
  public static get currentLangauge(): LanguageType {
    if (this._currentLangauge == null) {
      localStorage.setItem('currentLanguage', DEFAULT_LANGUAGE);
      this._currentLangauge = DEFAULT_LANGUAGE;
    }
    return this._currentLangauge;
  }
  public static set currentLangauge(v: LanguageType) {
    this._currentLangauge = v;
  }
}
