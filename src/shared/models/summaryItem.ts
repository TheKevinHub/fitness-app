export class SummaryItem {
    constructor
    (
        public summaryName : string | undefined,
        public isIncluded : boolean = true,
        public isCalories : boolean = false,
        public isWeight : boolean = false,
        public isHeight : boolean = false,
        public isDone : boolean = false
    ) { }
}