import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {


    addExercise = function () {
        alert("add exercise activated");
    }

    constructor() {
    }

    ngOnInit() {
    }

}
