import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./ImageSection.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

const builder = imageUrlBuilder(client);

function ImageSection(props) {

  const { heading, label, text, image, cta } = props;
  const isPage = cta && cta.route && cta.route.slug && cta.route.slug.current;
  const isProject = cta && cta.project && cta.project.slug && cta.project.slug.current;

  if (!image) {
    return null;
  }
  
  if (isPage || isProject) {
    return (
      <Link
        href={{
          pathname: isPage ? "/LandingPage" : "/project",
          query: { slug: isPage ? cta.route.slug.current : cta.project.slug.current },
        }}
        as={`/${isPage ? cta.route.slug.current : cta.project.slug.current}`}
      >
        <a>
          <div className={styles.root}>
            <img
              src={builder.image(image).auto("format").width(2000).url()}
              className={styles.image}
              alt={heading}
            />
            { label && heading && (<figcaption>
              <div className={styles.caption}>
                <div className={styles.captionBox}>
                  <div className={styles.label}>{label}</div>
                  <h2 className={styles.title}>{heading}</h2>
                  {text && <SimpleBlockContent blocks={text} />}
                  {cta && cta.route && <Cta {...cta} />}
                </div>
              </div>
            </figcaption> ) }
          </div>
        </a>
      </Link>
    );
  }

  if (cta.link) {
    return (
      <a href={cta.link} target="_blank">
        <div className={styles.root}>
          <img
            src={builder.image(image).auto("format").width(2000).url()}
            className={styles.image}
            alt={heading}
          />
          { label && heading && (<figcaption>
            <div className={styles.caption}>
              <div className={styles.captionBox}>
                <div className={styles.label}>{label}</div>
                <h2 className={styles.title}>{heading}</h2>
                {text && <SimpleBlockContent blocks={text} />}
                {cta && cta.route && <Cta {...cta} />}
              </div>
            </div>
          </figcaption> ) }
        </div>
      </a>
    );
  }

  return (
    <div className={styles.root}>
      <img
        src={builder.image(image).auto("format").width(2000).url()}
        className={styles.image}
        alt={heading}
      />
      { label && heading && (<figcaption>
        <div className={styles.caption}>
          <div className={styles.captionBox}>
            <div className={styles.label}>{label}</div>
            <h2 className={styles.title}>{heading}</h2>
            {text && <SimpleBlockContent blocks={text} />}
            {cta && cta.route && <Cta {...cta} />}
          </div>
        </div>
      </figcaption> ) }
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default ImageSection;
