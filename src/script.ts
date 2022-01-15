// basic setup
import './base';
//
import { interval, mapTo, scan, takeWhile } from 'rxjs';

let initialValue = 15000; // ms
const tick = 10; // ms

function setValue(value: number | string) {
    document.querySelector('#timer').innerHTML = value.toString();
}

setValue(initialValue);

interval(tick).pipe(
    mapTo(tick),
    scan((initialValue, tick) => initialValue - tick, initialValue),
    takeWhile(value => value >= 0)
).subscribe({
    next: setValue,
    complete: () => setValue("Done!")
    
})
