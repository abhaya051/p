import React, { useState } from "react";
import "./App.css";
import { questions } from "./Data/Data";
function App() {
  let [show, SetShow] = useState(questions[0].id);
  return (
    <>
      <div>
        <h1 className="Head"> Frequently Asked Questions</h1>
        <div className="FaqQuoter">
          {questions.map((faq, i) => {
            return (
              <>
                <div className="faqItems">
                  <h2 onClick={() => SetShow(faq.id)}>{faq.question}</h2>
                  <p className={show == faq.id ? "ActiveAns" : ""}>
                    {faq.answer}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
