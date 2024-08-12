import { AsyncPipe } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Message, MessageService } from './message.service';

@Component({
  standalone: true,
  selector: 'app-message',
  imports: [AsyncPipe],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  message: Signal<Message | undefined>;
  loading: Signal<boolean>;
  
  constructor(private readonly messageService: MessageService) {
    this.message = this.messageService.getMessage();
    this.loading = this.messageService.isMessageLoading();
  }
}
