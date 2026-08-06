import { Command } from "../Command";

export class PasteCommand implements Command {

    id = "paste";

    execute() {

        console.log("Paste command executed");

    }

}