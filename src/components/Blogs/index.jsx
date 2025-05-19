import React from "react";
import styles from "./Blogs.module.css";
import BlogCard from "../UI/BlogCard";
import Heading from "../UI/Heading";

function Blogs() {
  return (
    <div>
      <Heading
        subHeading={"Blog & News"}
        heading={"Read Our Latest News"}
        centered
      />
      <div className={styles.blogsWrapper}>
        {[1, 2, 3].map((_, idx) => {
          return (
            <BlogCard
              key={idx}
              blogImg="/blog-img.png"
              title="6 Tips To Protect Your Mental Health When You’re Sick"
              category="Medical"
              date="March 31, 2022"
              author="Rebecca Lee"
              authorImg="/doc-img.jpg"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
