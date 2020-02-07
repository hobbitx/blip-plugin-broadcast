import { OnInit, OnDestroy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { IframeService } from '@app/services/iframe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  unsub = new Subject();
  loadingDashboard = false;
  constructor(private iframeService: IframeService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

  toast() {
    this.iframeService.showToast({
      type: 'danger',
      message: 'Success loaded'
    });
  }
}
