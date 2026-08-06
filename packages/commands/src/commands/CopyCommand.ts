import { Command } from "../Command";

export class CopyCommand implements Command {

    id = "copy";

    execute() {

        console.log("Copy command executed");

    }

}