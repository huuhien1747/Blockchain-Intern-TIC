import { Component, OnInit } from '@angular/core';

//add services to show message
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // property must be public because it use to bind to hero template.ts
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
