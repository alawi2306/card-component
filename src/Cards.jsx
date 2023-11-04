import React, {useState} from "react";
import "./styles.css"

const data = [
    {

        name: "MongoDB",
        desc: "Expertise in MongoDB database design and optimization.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        name: "Express.js",
        desc: "Skilled in building robust APIs with Express.js.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

    },
    {
        name: "React",
        desc: "Proficient in developing interactive UIs with React.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

    },
    {
        name: "Node.js",
        desc: "Adept at scalable server-side applications using Node.js.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

    },
    {
        name: "Tailwind CSS",
        desc: "Proficient in building responsive and modern interfaces with Tailwind CSS.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    {
        name: "Git & Version Control",
        desc: "Experienced in managing codebases and collaborating using Git.",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"    
    },
]


function Card(props) {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        setMousePosition({ x, y });
    };

    const handleMouseOut = () => {
        setMousePosition({ x: null, y: null });
    };

    const cardStyle = {
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
    };

    return (
        <div 
            className="card" 
            style={cardStyle} 
            onMouseMove={handleMouseMove} 
            onMouseOut={handleMouseOut}
        >
            <img className="image" src={props.url} alt="picture"></img>
            <h1 className="title">{props.title}</h1>
            <p className="desc">{props.description}</p>
        </div>
    );
}


function createCards(dataItem, index) {
    return (
        <Card 
            key={index} // Adding the key prop here
            url= {dataItem.url}
            title={dataItem.name} // Correcting the property name
            description={dataItem.desc} // Correcting the property name
        />
    )
}

function Cards() {
    return (
      <div className="container"> {/* Wrapping the cards inside a div */}
      <div className="head">        
        <h1>My skills:</h1>
      </div>
        <div className="card-container">
        {data.map(createCards)}
        </div>
      </div>
    )
}



export default Cards;
