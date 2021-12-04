import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const { id, order, title, dates, duties, company } = jobs[value];

  return (
    <main>
      <div className="title">
        <h1>Jobs</h1>
        <div className="title-underline"></div>
      </div>
      <section className="job-container">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`btn btn-tab ${index === value && "btn-active"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="job">
          <h1>{title}</h1>
          <h2>{dates}</h2>
          <h3>{company}</h3>
          <div>
            {duties.map((duty, index) => {
              return (
                <p key={index}>
                  <span>&#62; </span>
                  {duty}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
