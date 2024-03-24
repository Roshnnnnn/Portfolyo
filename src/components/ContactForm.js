import React, { useState, useEffect } from "react";
import { fetchData } from "../../pages/api/hello";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const [media, setMedia] = useState([]);
  const [social, setSocial] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setMedia(data.social_handles);
        setSocial(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserData();

    // Check if screen size is small
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="contact" style={{ display: "flex", justifyContent: "center" }}>
      <form
        className="contactForm"
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "90vw",
          maxWidth: "40rem",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          style={{
            fontSize: "medium",
            width: "100%",
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            color: "#ab5429",
            borderRadius: "0.5rem",
            background: "white",
          }}
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          style={{
            fontSize: "medium",
            width: "100%",
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            color: "#ab5429",
            borderRadius: "0.5rem",
            background: "white",
          }}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          style={{
            fontSize: "medium",
            width: "100%",
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            color: "#ab5429",
            borderRadius: "0.5rem",
            background: "white",
          }}
          cols={30}
          rows={10}
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{
            background: "white",
            border: "none",
            borderRadius: "0.5rem",
            margin: "2rem",
            padding: "0.75rem 3.5rem",
          }}
        >
          Submit
        </button>
      </form>
      {!isSmallScreen && (
        <div style={{ margin: "4rem", marginRight: "1rem" }}>
          {media.map((item, index) => (
            <a href={item.url} key={index} style={{ marginRight: "20px" }}>
              <img
                src={item.image.url}
                alt={item.platform}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </a>
          ))}
          <span>
            <a
              style={{ fontSize: "2rem", color: "white", marginTop: "1rem" }}
              href="mailto:infomaya.tonni@gmail.com"
            >
              {social.email}
            </a>
          </span>
          <div className="copyright">
            <p>
              © {new Date().getFullYear()} by{" "}
              <a
                href="https://themeforest.net/user/codeefly"
                target="_blank"
                rel="noreferrer"
              >
                Codeefly.
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
