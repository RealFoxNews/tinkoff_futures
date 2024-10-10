import { Directive, ElementRef, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Directive({
   selector: '[resizeObserver]',
})
export class ResizeObserverDirective implements OnInit {
   @Output() resize: EventEmitter<{ width: number; height: number }> = new EventEmitter();

   private resizeObserver: ResizeObserver;
   private subscription: Subscription;

   constructor(private readonly elementRef: ElementRef, private readonly zone: NgZone) {}

   ngOnInit(): void {
      const subject = new Subject();

      this.zone.runOutsideAngular(() => {
         this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[], observer: ResizeObserver) => subject.next(entries));
         this.resizeObserver.observe(this.elementRef.nativeElement);
      });

      this.subscription = subject
         .asObservable()
         .pipe(
            debounceTime(20),
            filter((i) => Array.isArray(i))
         )
         .subscribe((entries: ResizeObserverEntry[]) => {
            const { target } = entries[0];
            if (target) this.resize.emit({ width: target.clientWidth, height: target.clientHeight });
         });
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
      this.resizeObserver?.disconnect();
   }
}
