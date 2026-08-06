import { Command } from "../Command";

export class CutCommand implements Command {

    id = "cut";

    execute() {

        console.log("Cut command executed");

    }

}