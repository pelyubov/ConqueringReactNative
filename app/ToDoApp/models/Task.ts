import ITask from './ITask';

export default class Task implements ITask {
    constructor(
        public name: string,
        public done: boolean,
        public dateStart: Date,
        public dateEnd: Date,
        public description: string,
        public priovity: number,
        public tags: string[],
    ) {
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.priovity = priovity;
        this.tags = tags;
        this.done = done;
    }
}
