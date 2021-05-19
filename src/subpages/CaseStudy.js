import sanityClient from "../client.js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "../assets/styles.scss";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function CaseStudy() {
  const [caseStudy, caseStudyPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => caseStudyPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!caseStudy) return <div>Loading...</div>;

  return (
    <main>
      <article>
        <header>
          <div>
            <div>
              <h1>{caseStudy.title}</h1>
              <div>
                <img
                  src={urlFor(caseStudy.authorImage).url()}
                  alt={caseStudy.name}
                />
                <p>{caseStudy.name}</p>
              </div>
            </div>
          </div>
          <img src={caseStudy.mainImage.asset.url} alt={caseStudy.title} />
        </header>
        <div>
          <BlockContent
            blocks={caseStudy.body}
            projectId="0gdooh8l"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
