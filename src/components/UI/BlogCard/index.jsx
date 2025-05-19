import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard({ title, category, date, author, authorImg, blogImg }) {
  return (
    <div className={styles.blogWrapper}>
      <img src={blogImg} alt="doc-image" className={styles.blogImg} />
      <div className={styles.blogDetails}>
        <div className={styles.blogHeader}>
          <p>{category}</p>
          <div className={styles.vr}></div>
          <p>{date}</p>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.authorContainer}>
          <img src={authorImg} alt="author" className={styles.authorIimg} />
          <p className={styles.author}>{author}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
