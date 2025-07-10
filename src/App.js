import { useState } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";

function App() {
  const [skills, setSkills] = useState([]);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  // Called by <LandingPage /> when user clicks "Match Jobs"
  const handleMatch = async (skillsArray) => {
    setSkills(skillsArray); // update skill list in App
    try {
      const response = await axios.post("http://localhost:3001/fetch-jobs", {
        skills: skillsArray,
      });
      setMatchedJobs(response.data.matches);
      setSavedJobs([]); // Clear saved jobs view
    } catch (error) {
      console.error("Error fetching matched jobs:", error);
    }
  };

  const loadSavedJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/saved-jobs");
      setSavedJobs(response.data);
      setMatchedJobs([]); // Clear matched jobs view
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  return (
    <div className="App">
      {/* 🔹 Custom Landing Page UI */}
      <LandingPage onMatch={handleMatch} onViewSaved={loadSavedJobs} />



      {/* 🎯 Matched Jobs Section */}
      {matchedJobs.length > 0 && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3>Matched Jobs:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {matchedJobs.map((job, index) => (
  <li key={index} style={{ marginBottom: "20px" }}>
    <strong>{job.title}</strong> at {job.company} <br />
    📍 Location: {job.location || "N/A"} <br />
    <span style={{ color: "#2ecc71", fontWeight: "500" }}>
  ✅ Matched With: {skills.join(", ")}
</span>

    <a href={job.url} target="_blank" rel="noreferrer">
      Apply
    </a>
  </li>
))}

          </ul>
        </div>
      )}

      {/* 📌 Saved Jobs Section */}
      {savedJobs.length > 0 && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h3>Saved Jobs:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {savedJobs.map((job, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <strong>{job.title}</strong> at {job.company} <br />
                Skills: {job.requiredSkills.join(", ")} <br />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
