export default interface ITask {
    name: string;
    done: boolean;
    dateStart: Date;
    dateEnd: Date;
    description: string;
    priovity: number;
    tags: string[];
}
