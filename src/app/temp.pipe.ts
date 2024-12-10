import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'temp',
    standalone: true
})

export class TempPipe implements PipeTransform{

    transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): string {
        let val: number;
        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        let outputTemp: number;
        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;
        }

        const symbol: 'C' | 'F' = outputType ? (outputType === 'cel' ? 'C' : 'F') : (inputType === 'cel' ? 'C' : 'F');

        // Format output with fixed decimals
        return `${outputTemp.toFixed(2)} °${symbol}`;
    }
    
}



