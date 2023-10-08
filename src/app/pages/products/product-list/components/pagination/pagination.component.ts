import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants } from 'src/app/core/configs/constants';
import { ArrowBtnSVG } from 'src/app/shared/svg/arrow-btn/arrow-btn.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
  standalone: true,
  imports: [ArrowBtnSVG, NgFor, NgIf, NgClass],
})
export class PaginationComponent {
  @Input()
  pageSize = Constants.PAGE_SIZE;

  maxPage = 1;

  private _total = 0;
  public get total(): number {
    return this._total;
  }
  @Input()
  public set total(v: number) {
    this._total = v;
    this.maxPage = Math.ceil(v / this.pageSize);
  }

  @Output()
  pageIndexChange = new EventEmitter<number>();

  @Input()
  pageIndex = Constants.PAGE_INDEX;

  choosePage(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.pageIndexChange.emit(pageIndex);
  }

  left() {
    if (this.pageIndex > 1) {
      this.choosePage(this.pageIndex - 1);
    }
  }

  right() {
    if (this.pageIndex < this.maxPage) {
      this.choosePage(this.pageIndex + 1);
    }
  }
}
