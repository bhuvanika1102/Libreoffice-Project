import { Command } from "./Command";

export class CommandManager {

    private commands = new Map<string, Command>();

    register(command: Command) {

        this.commands.set(command.id, command);

    }

    execute(id: string) {

        const command = this.commands.get(id);

        if (!command) {

            console.warn(`Command '${id}' not found`);

            return;

        }

        command.execute();

    }

}