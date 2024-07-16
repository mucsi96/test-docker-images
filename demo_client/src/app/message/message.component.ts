import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { loading } from '../utils/loading';

@Component({
  standalone: true,
  selector: 'app-message',
  imports: [AsyncPipe],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  constructor(private readonly messageService: MessageService) {}
  $message = this.messageService.getMessage();
  $loading = this.$message.pipe(loading());
}
