import { Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, Observable, of, startWith } from 'rxjs';

export function toLoadingSignal($data: Observable<unknown>): Signal<boolean> {
  return toSignal(
    $data.pipe(
      map(() => false),
      startWith(true),
      catchError(() => of(false))
    ),
    { initialValue: true }
  );
}
