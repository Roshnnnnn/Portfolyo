import { useState, useEffect } from "react";
import { fetchData } from "../../pages/api/hello";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);

  const fetchUserData = async () => {
    try {
      const data = await fetchData();
      setUser(
        data.projects
          .filter((pro) => pro.enabled === true)
          .sort((a, b) => a.sequence - b.sequence)
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveDetailsPopup(true);
  };

  return (
    <div>
      <div className="tonni_tm_section">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>
                  Fusce sollicitudin eros id ex maximus gravida non vitae ante.
                  Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
            </div>
            {loading ? (
              <div>Loading....</div>
            ) : (
              <div className="portfolio_list wow fadeInUp">
                {user.map((project) => (
                  <div className="grid-sizer" key={project._id}>
                    <div
                      className="list_inner"
                      onClick={() => openModal(project)}
                    >
                      <div className="image">
                        {project.image && project.image.url ? (
                          <div className="image-wrapper">
                            <img src={project.image.url} className="zoom" />
                          </div>
                        ) : (
                          <div>Error: Image not available</div>
                        )}
                        <div
                          className="main"
                          data-img-url={project.image.url}
                        />
                      </div>
                      <div className="details">
                        <span className="category">{project.sequence}</span>
                        <h3 className="title">{project.title}</h3>
                        <img className="svg" src="img/svg/vector5.svg" alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default Portfolio;
