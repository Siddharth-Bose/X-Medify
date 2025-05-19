import React from "react";
import styles from "./FAQ.module.css";
import Heading from "../UI/Heading";
import Question from "./Question";

function FAQ() {
  const questions = [
    "Why choose our medical for your family?",
    "Why we are different from others?",
    "Trusted & experience senior care & love",
    "How to get appointment for emergency cases",
  ];
  return (
    <div className={styles.faqWrapper}>
      <Heading
        heading={"Frequently Asked Questions"}
        subHeading={"Get Your Answer"}
        centered
      />
      <div className={styles.faqs}>
        <div className={styles.faqAbout}>
          <div className={styles.smiley}>
            <img src="/Smiley.png" alt="smiley" />
            <div className={styles.smileyAbout}>
              <p className={styles.number}>84k+</p>
              <p className={styles.customer}>Happy Customers</p>
            </div>
          </div>
          <img src="faq-img.png" alt="faq" className={styles.faqImg} />
          <img src="/Heart.png" alt="heart" className={styles.heart} />
        </div>
        <div className={styles.faqQuestions}>
          {questions.map((ques, idx) => {
            return <Question key={idx} question={ques} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
