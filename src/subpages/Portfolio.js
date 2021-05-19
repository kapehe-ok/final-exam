import sanityClient from "../client.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles.scss";

export default function Portfolio() {
  const [postData, setPost] = useState(null);

  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"] {
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });

  if (!didMount) {
    return null;
  }

  return (
    <main>
      <h1>Test</h1>
      <h2>Welcome test!</h2>
      <div className="portfolio-box">
        {postData &&
          postData.map((projects, index) => (
            <section key={projects.slug.current}>
              <Link
                to={"/CaseStudy/" + projects.slug.current}
                key={projects.slug.current}
              >
                <span key={index}>
                  <img
                    src={projects.mainImage.asset.url}
                    alt={projects.mainImage.alt}
                  />
                </span>
                <h3>{projects.title}</h3>
              </Link>
            </section>
          ))}
      </div>
    </main>
  );
}
