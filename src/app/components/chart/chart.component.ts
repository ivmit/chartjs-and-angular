import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  NgZone
} from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType} from 'chart.js';
import { hoverDefaults, animationsDefaults} from './chart.constants';
import { ChartTooltipService } from './chart-tooltip/chart-tooltip.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('chart') chart: ElementRef;
  @Input() type: ChartType = 'line';
  @Input() data: ChartData;
  @Input() options: ChartOptions;

  chartInstance: Chart;

  constructor(private zone: NgZone, private tip: ChartTooltipService) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => this.init())
  }

  ngOnChanges(props) {
    if(props.data && !props.data.firstChange) {
      this.zone.runOutsideAngular(() => this.update(props.data.currentValue))
    }
  }

  ngOnDestroy() {
    this.chartInstance.destroy();
  }

  private init() {
    const ctx = this.chart.nativeElement.getContext('2d');

    this.chartInstance = new Chart(ctx, {
      type: this.type,
      data: this.data,
      options: this.getOptions()
    })
  }

  private getOptions(): ChartOptions {
      return {
        ...hoverDefaults,
        ...animationsDefaults,
        tooltips: {
          custom: this.tip.getTip
        },
        ...this.options
      }
  }

  private update(value) {
    this.chartInstance.data = value;
    this.chartInstance.update();
  }
}
