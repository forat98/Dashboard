import {ChangeDetectionStrategy, Component, NgModule, Renderer2} from '@angular/core';
import {LangDefinition, TranslocoService} from '@ngneat/transloco';
import {share} from 'rxjs/operators';

@Component({
  selector: 'widget-language-selector',
  templateUrl: './language-selector.component.html',
  exportAs: 'languages',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectorComponent {
  public availableLangs = this._translocoService.getAvailableLangs() as LangDefinition[];
  public activeLang$ = this._translocoService.langChanges$.pipe(share());
  public flagCodes = {
    'en': 'us',
    'ar': 'sa'
  };

  constructor(
    private _translocoService: TranslocoService,
    private _renderer: Renderer2
  ) {
  }

  setActiveLang(lang: string): void {
    this._translocoService.setActiveLang(lang);
  }

  changeDirection(lang: string) {
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    // eslint-disable-next-line no-restricted-globals
    this._renderer.setAttribute(document.body, 'dir', dir)
  }
}



// FIXME: to be refactored to use input and output
