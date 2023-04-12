import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-extended-info',
  templateUrl: './extended-info.component.html',
  styleUrls: ['./extended-info.component.css'],
})
export class ExtendedInfoComponent {
  myPortfolio: any;
  constructor(private dataObtain: PortfolioService) {}

  ngOnInit() {
    this.dataObtain.dataObtain().subscribe((data) => {
      this.myPortfolio = data;
    });
  }
}
