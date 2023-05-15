import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  showModal!: boolean;
  content!: string;
  mTitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

    //Bootstrap Modal Open event
    show() {
      this.showModal = true; // Show-Hide Modal Check
      this.content = "This is content!!"; // Dynamic Data
      this.mTitle = "This is title!!";    // Dynamic Data
    }
    //Bootstrap Modal Close event
    hide() {
      this.showModal = false;
    }

}
