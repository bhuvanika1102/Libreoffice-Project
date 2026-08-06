import {
    CommandManager,
    PasteCommand,
    CopyCommand,
    CutCommand
  } from "@novawriter/commands";
  
  const commandManager = new CommandManager();
  
  commandManager.register(new PasteCommand());
  commandManager.register(new CopyCommand());
  commandManager.register(new CutCommand());
  
  export default commandManager;