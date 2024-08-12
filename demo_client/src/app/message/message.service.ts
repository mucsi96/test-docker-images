import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, shareReplay } from 'rxjs';
import { toLoadingSignal } from '../utils/loading';

export type Message = {
  message: string;
};

@Injectable()
export class MessageService {
  $messages: Observable<Message>;

  constructor(private readonly http: HttpClient) {
    this.$messages = this.http
      .get<Message>('/api/message')
      .pipe(shareReplay(1));
  }

  getMessage(): Signal<Message | undefined> {
    return toSignal(this.$messages);
  }

  isMessageLoading(): Signal<boolean> {
    return toLoadingSignal(this.$messages);
  }
}
