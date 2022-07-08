import React, { useEffect } from "react";
import * as THREE from "three";
import "./Home.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {Typography} from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiBlender,
    SiHoudini,
    SiThreedotjs,
    SiAutodesk,
    SiCplusplus,
} from "react-icons/si";
import Cards from "../Cards/Cards";

function Home(){

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            24,
            window.innerWidth/window.innerHeight,
            0.1,
            1000
        );

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(3,64,64);
        const moonMaterial = new THREE.MeshStandardMaterial({color : 0xDC1E83});
        const moon = new THREE.Mesh(moonGeometry,moonMaterial);
        moon.position.set(0,0,0);

        const moon2Geometry = new THREE.SphereGeometry(3,64,64);
        const moon2Material = new THREE.MeshStandardMaterial({color : 0xAD20B2});
        const moon2 = new THREE.Mesh(moon2Geometry,moon2Material);
        moon.position.set(10,0,0);

        const planeGeometry = new THREE.PlaneGeometry(10,10,1,1);
        const planeMaterial = new THREE.MeshStandardMaterial({color : 0xAD20B2});
        const plane = new THREE.Mesh(planeGeometry,planeMaterial);
        plane.rotation.x = -Math.PI / 2; 
        plane.position.set(0,-3,0);
            
        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(30,30,20);
        pointLight1.position.set(-10,20,-20);
        pointLight2.position.set(0,5,10);

        // const lightHelper = new THREE.PointLightHelper(pointLight);
        // const lightHelper1 = new THREE.PointLightHelper(pointLight1);
        // const lightHelper2 = new THREE.PointLightHelper(pointLight2);
    
        scene.add(moon);
        scene.add(moon2);
        scene.add(plane);
        scene.add(pointLight);
        scene.add(pointLight1);
        scene.add(pointLight2);
        // scene.add(lightHelper);
        // scene.add(lightHelper1);
        // scene.add(lightHelper2);

        camera.position.z = 30;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);    
        };

        animate();

    }, []);

    return (
        <div className="home">
            <canvas className="homeCanvas"></canvas>

            <div className="homeContainer">
                <Typography variant="h3">TIMELINE</Typography>
                <TimeLine timelines={[1,2,3,4]} />
            </div>

            <div className="homeSkills">
                <Typography variant="h3">SKILLS</Typography>

                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img 
                            src="images/Blender.png" 
                            alt="Face1" 
                        />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img 
                            src="images/zbrush.png" 
                            alt="Face2" 
                        />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img 
                            src="images/subs.png" 
                            alt="Face3" 
                        />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img 
                            src="images/react.png" 
                            alt="Face4" 
                        />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img 
                            src="images/js.png" 
                            alt="Face5" 
                        />
                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img 
                            src="images/mongo.png" 
                            alt="Face6" 
                        />
                    </div>
                </div>

                <div className="cubeShadow"></div>
                <div className="homeSkillsBox">
                    <SiBlender />
                    <SiCplusplus />
                    <SiJavascript />
                    <SiReact />
                    <SiExpress />
                    <SiMongodb />
                    <SiNodedotjs />
                    <SiThreedotjs />
                    {/* <SiAutodesk />
                    <SiHoudini />
                    <SiHtml5 />
                    <SiCss3 /> */}
                </div>
            </div>

            <div className="homeCards">
                <Typography variant="h3">3D Models</Typography>

                <div className="homeCardsWrapper">
                    <Cards image="images/O1-01.png" title="OXONE" />
                    <Cards image="images/O1-01.png" title="OXONE" />
                    <Cards image="images/O1-01.png" title="OXONE" />
                    <Cards image="images/O1-01.png" title="OXONE" />
                    <Cards image="images/O1-01.png" title="OXONE" />
                    <Cards image="images/O1-01.png" title="OXONE" />
                </div>
            </div>
        </div>
    );
}

export default Home;