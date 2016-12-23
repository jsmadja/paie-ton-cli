import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-transformer',
    templateUrl: './transformer.component.html',
    styleUrls: ['./transformer.component.css']
})
export class TransformerComponent implements OnInit {

    dest: string;

    constructor() {
    }

    ngOnInit() {
    }

    transcode(text: string) {
        const lines = text.split('\n');
        let result = '';
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.indexOf('.') >= 0) {
                result += line + '\n\n';
            } else {
                result += line + ' ';
            }
        }
        this.dest = result;
    }

}
