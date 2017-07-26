import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccessControlLogService } from '../../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  showFlashes = false;

  constructor(private logService: AccessControlLogService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.logService.addAccessItem(form.value.person, form.value.message);
    this.showLogs();

    // Clear form and show the flashes
    form.resetForm();
    this.showFlashes = true;
    setTimeout(() => {this.showFlashes = false}, 3000);
  }

  showLogs() {
    console.table(this.logService.getAccessLog());
  }
}
