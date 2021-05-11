import { MdFileProcessor, Quiz } from "quiz-too";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ChallengeComponent from "../Challenge/ChallengeComponent";
import Navbar from "../common/Navbar/Navbar";

const Practice = (): JSX.Element => {
  const history = useHistory();
  const { encodedUrl } = useParams<{ encodedUrl: string }>();

  const url = atob(encodedUrl);
  const [practice, setPractice] = useState<Quiz>();

  useEffect(() => {
    console.log(encodedUrl);
    if (!url) {
      history.push("/");
    }

    fetch(url)
      .then((response) => response.text())
      .then((content) => {
        const mdFileProcessor = new MdFileProcessor(content);
        const practice = mdFileProcessor.getQuiz();
        if (practice.getChallenges().length === 0) {
          throw Error("No Challenge Detected.");
        }
        setPractice(practice);
      })
      .catch(() => {
        alert("fail to load practice.");
        history.push("/");
      });
  }, []);

  return (
    <div className="dark:text-gray-100">
      <Navbar />
      <div className="flex-col justify-items-center pt-2 select-none">
        {practice
          ? practice.getChallenges().map((item, idx) => {
              return <ChallengeComponent key={idx} challenge={item} />;
            })
          : null}
        {/* {quiz? <ChallengeComponent challenge={quiz.getChallenges()[8]} />: null}
          {quiz? <ChallengeComponent challenge={quiz.getChallenges()[9]} />: null} */}
      </div>
    </div>
  );
};

export default Practice;
