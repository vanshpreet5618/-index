import React, { useState } from "react";
import "./LandingPage.css";

function LandingPage({ onMatch, onViewSaved }) {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skill.trim()) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  const handleSavedClick = (e) => {
    e.preventDefault(); // prevent page scroll
    if (onViewSaved) onViewSaved(); // tell App.js to load saved jobs
  };

  return (
    <div className="landing">
      <header className="navbar">
        <h1 className="brand">@index</h1>
        <nav>
          <a href="#match">Matched Jobs</a>
          <a href="#saved" onClick={handleSavedClick}>Saved Jobs</a> {/* ✅ Hooked to prop */}
        </nav>
      </header>

      <section className="hero">
        <h2>Discover jobs that match your skills 🎯</h2>
        <p>Powered by AI & real-time data across job boards</p>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a skill (e.g., React)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button onClick={addSkill}>Add Skill</button>
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <span key={i} className="skill-chip">{s}</span>
          ))}
        </div>

        <button className="match-btn" onClick={() => onMatch(skills)}>
          🎯 Match Jobs
        </button>
      </section>
    </div>
  );
}

export default LandingPage;
