import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {
  myPortfolio:any;
  constructor(private dataObtain:PortfolioService){
  
  }

  ngOnInit(){
    this.dataObtain.dataObtain().subscribe( data => {
      this.myPortfolio = data;
    }
    );
  }

}
