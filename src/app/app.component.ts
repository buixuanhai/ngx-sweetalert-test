import { Component, ViewChild, OnInit } from '@angular/core';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  transfer: Function;

  @ViewChild('confirmModal') private confirmModal: SwalComponent;

  ngOnInit(): void {}

  showDialog() {
    this.confirmModal.show();
    this.transfer = ((a, b) => console.log(a + b)).bind(this, 1, 2);
  }

  proceedTransfer(action: Function) {
    console.log('Transferred');
    action();
  }
}
