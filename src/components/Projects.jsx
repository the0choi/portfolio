import Project from './Project'; 
import { LaptopCanvas } from './canvas'

export default function Projects() {
  return (
    <>
      <div className="h-80 w-full bg-gradient-to-b from-[#11151c] via-[#807e7e] to-transparent"></div>
      <Project 
        projectNo={"01"} 
        title={"AI Art Generator & Interpretor"}
        tech={"React • Express • Node JS • MongoDB"}
        description={"A community platform to share AI art powered from textual prompts."}
        url={"https://github.com/the0choi/envision"}
        website={"https://envision-the0choi-8e677992651d.herokuapp.com/"}
        color={"blue"}
        model={
          <LaptopCanvas 
            title={"envision"} 
            sceneModel={"/portfolio/laptop_1/scene.gltf"} 
            isModelFirst={false}
            rotation={[0.3, 0.3, -0.1]} 
          />
        }
        isModelFirst={false}
      />

      <Project 
        projectNo={"02"} 
        title={"Gamified Productivity App"}
        tech={"Django • PostgreSQL • Photoshop"} 
        description={"Retro-style productivity timer with gamified elements."}
        url={"https://github.com/the0choi/dino-park"}
        website={"https://dino-park-fd91c4eeec11.herokuapp.com/"}
        color={"red"}
        model={
          <LaptopCanvas 
            title={"dino park"} 
            sceneModel={"/portfolio/laptop_2/scene.gltf"} 
            isModelFirst={true} 
            rotation={[0.3, 1, -0.2]} 
          />
        }
        isModelFirst={true}
      />

      <Project 
        projectNo={"03"} 
        title={"Fitness & Lifestyle Tracker"}
        tech={"Express • Node JS • MongoDB"}
        description={"Data-centric integration with Fitbit to track users' health metrics."}
        url={"https://github.com/the0choi/trackr"}
        website={"https://trackr-the0choi-1fa6c3dcf348.herokuapp.com/"}
        color={"yellow"}
        model={
          <LaptopCanvas 
            title={"trackr"} 
            sceneModel={"/portfolio/laptop_3/scene.gltf"} 
            isModelFirst={false} 
            rotation={[0.5, 0.5, -0.1]} 
          />
        }
        isModelFirst={false}

      />

      <Project 
        projectNo={"04"} 
        title={"Web Browser Game"}
        tech={"HTML • CSS • JavaScript"}
        description={"An aquatic twist on the classic Minesweeper game."}
        url={"https://github.com/the0choi/sea-sweep"}
        website={"https://the0choi.github.io/sea-sweep/"}
        color={"green"}
        model={
          <LaptopCanvas 
            title={"sea sweep"} 
            sceneModel={"/portfolio/laptop_4/scene.gltf"} 
            isModelFirst={true} 
            rotation={[0.8, 1, -0.7]} 
          />
        }
        isModelFirst={true}

      />

    </>
  )
}