import RibbonButton from "./RibbonButton";
import RibbonGroup from "./RibbonGroup";
import { ribbonConfig } from "../../data/ribbon/ribbonConfig";
import commandManager from "../../services/commandManager";
export default function Ribbon() {
    return (

        <div
        style={{
        display:"flex",
        background:"#f4f4f4",
        borderBottom:"1px solid #ddd",
        height:110
        }}
        >
        
        {
        
        ribbonConfig.map(group=>(
        
        <RibbonGroup
        key={group.title}
        title={group.title}
        >
        
        {
        
        group.buttons.map(button=>(
        
            <RibbonButton
            key={button.id}
            label={button.label}
            onClick={() => commandManager.execute(button.command)}
          />
        
        ))
        
        }
        
        </RibbonGroup>
        
        ))
        
        }
        
        </div>
        
        )
}