import sanityClient from "@sanity/client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles.scss";

export default function Portfolio() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
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

  return (
    <main>
      <h1>Test</h1>
      <h2>Welcome test!</h2>
      <div>
        {postData &&
          postData.map((post, index) => (
            <section>
              <Link
                to={"/Portfolio" + post.slug.current}
                key={post.slug.current}
              >
                <span key={index}>
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  />
                </span>
                <h3>{post.title}</h3>
              </Link>
            </section>
          ))}
      </div>
    </main>
  );
}
