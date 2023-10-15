import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utilities/motion";
import Project from './Project'; 
import { LaptopCanvas } from './canvas'

export default function Projects() {
  return (
    <>
      <div className="sm:px-16 px-6 border border-secondary w-3/5 mt-8 mx-auto"></div>
      <Project 
        projectNo={"01"} 
        title={"AI Art Generator & Interpretor"}
        description={"A community platform to share AI art powered from textual prompts."}
        url={"https://github.com/the0choi/envision"}
        color={"blue"}
        model={
          <LaptopCanvas 
            title={"envision"} 
            sceneModel={"/laptop_1/scene.gltf?url"} 
            isModelFirst={false}
            rotation={[0.3, 0.3, -0.1]} 
          />
        }
        isModelFirst={false}
      />

      <Project 
        projectNo={"02"} 
        title={"Gamified Productivity App"}
        description={"Retro-style productivity timer with gamified elements."}
        url={"https://github.com/the0choi/dino-park"}
        color={"red"}
        model={
          <LaptopCanvas 
            title={"dino park"} 
            sceneModel={"/laptop_2/scene.gltf?url"} 
            isModelFirst={true} 
            rotation={[0.3, 1, -0.2]} 
          />
        }
        isModelFirst={true}
      />

      <Project 
        projectNo={"03"} 
        title={"Fitness & Lifestyle Tracker"}
        description={"Data-centric integration with Fitbit to track users' health metrics."}
        url={"https://github.com/the0choi/trackr"}
        color={"yellow"}
        model={
          <LaptopCanvas 
            title={"trackr"} 
            sceneModel={"/laptop_3/scene.gltf?url"} 
            isModelFirst={false} 
            rotation={[0.5, 0.5, -0.1]} 
          />
        }
        isModelFirst={false}

      />

      <Project 
        projectNo={"04"} 
        title={"Web Browser Game"}
        description={"An aquatic twist on the classic Minesweeper game."}
        url={"https://github.com/the0choi/sea-sweep"}
        color={"green"}
        model={
          <LaptopCanvas 
            title={"sea sweep"} 
            sceneModel={"/laptop_4/scene.gltf?url"} 
            isModelFirst={true} 
            rotation={[0.8, 1, -0.7]} 
          />
        }
        isModelFirst={true}

      />

    </>
  )
}