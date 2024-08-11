import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Message, MessageService } from './message.service';
import { loading } from '../utils/loading';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-message',
  imports: [AsyncPipe],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  $message: Observable<Message>;
  $loading: Observable<boolean>;
  
  constructor(private readonly messageService: MessageService) {
    this.$message = this.messageService.getMessage();
    this.$loading = this.$message.pipe(loading());
  }
}
