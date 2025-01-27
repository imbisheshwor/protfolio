import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  const projects = [
    {
      id: "01",
      name: "School Mangaement System",
      category: "MIS",
      Tools: "Laravel, TypeScript, React",
    },
    {
      id: "02",
      name: "Sahayogi",
      category: "Job Portal",
      Tools: "Node.js, TypeScript, React",
    },
    {
      id: "03",
      name: "MeroCanteen",
      category: "CMS",
      Tools: "Node.js, TypeScript, React",
    },
    {
      id: "04",
      name: "MeroCanteen",
      category: "CMS",
      Tools: "Node.js, TypeScript, React",
    },
    {
      id: "05",
      name: "EliteEarth",
      category: "TMS",
      tools: "Node.js, TypeScript, Next JS",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.name ?? ''}</h4>
                    <p>{item.category ?? ''}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools ?? ''}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
