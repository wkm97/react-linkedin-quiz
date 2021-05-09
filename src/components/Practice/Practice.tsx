import { MdFileProcessor, Quiz } from "quiz-too";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChallengeComponent from "../Challenge/ChallengeComponent";

const Practice = (): JSX.Element => {
  const { encodedUrl } = useParams<{ encodedUrl: string }>();
  const url = atob(encodedUrl);
  console.log(url)
  const [practice, setPractice] = useState<Quiz>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((content) => {
        const mdFileProcessor = new MdFileProcessor(content);
        const practice = mdFileProcessor.getQuiz();
        setPractice(practice);
      });
  }, []);

  return (
    <div className="flex-col justify-items-center pt-10 font-mono select-none dark:text-gray-100">
      {practice
        ? practice.getChallenges().map((item, idx) => {
            return <ChallengeComponent key={idx} challenge={item} />;
          })
        : null}
      {/* {quiz? <ChallengeComponent challenge={quiz.getChallenges()[8]} />: null}
      {quiz? <ChallengeComponent challenge={quiz.getChallenges()[9]} />: null} */}
    </div>
  );
};

export default Practice;
