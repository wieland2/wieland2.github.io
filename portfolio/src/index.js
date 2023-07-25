import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Skills />
    </div>
  )

}


function Skills() {
  return (
    <div className="skills">
      <Skill
        name="Python"
        icon= {<img class="icon icon--python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" />}
      />
      <Skill
        name="Django"
        icon= {<img class="icon icon--python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="django" />}
      />
      <Skill
        name="React"
        icon= {<img class="icon icon--react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />}
      />
      <Skill
        name="Ruby"
        icon= {<img class="icon icon--ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="ruby" />}
      />
      <Skill
        name="Rails"
        icon= {<img class="icon icon--rails" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" alt="rails" />}
      />
      <Skill
        name="HTML5"
        icon= {<img class="icon icon--html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />}
      />
       <Skill
        name="CSS"
        icon= {<img class="icon icon--css3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css3" />}
      />
      <Skill
        name="Bootstrap"
        icon= {<img class="icon icon--bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />}
      />
      <Skill
        name="PostgreSQL"
        icon= {<img class="icon icon--postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql" />}
      />




    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill">
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
