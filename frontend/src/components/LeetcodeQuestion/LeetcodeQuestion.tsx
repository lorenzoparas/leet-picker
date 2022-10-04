import LeetcodeQuestionDifficulty from "./LeetcodeQuestionDifficulty/LeetcodeQuestionDifficulty";
import LeetcodeQuestionProblem from "./LeetcodeQuestionProblem/LeetcodeQuestionProblem";
import LeetcodeQuestionVideo from "./LeetcodeQuestionVideo/LeetcodeQuestionVideo";
import { LeetcodeQuestionContainer } from "./LeetcodeQuestionStyles";
import LeetcodeQuestionSolution from "./LeetcodeQuestionSolution/LeetcodeQuestionSolution";
import { LeetcodeQuestionProps } from "./LeetcodeQuestionTypes";

const LeetcodeQuestion = ({ name, questionUrl, difficulty, videoUrl, solutionUrl }: LeetcodeQuestionProps) => {
    return (
        <LeetcodeQuestionContainer>
            <LeetcodeQuestionProblem name={name} questionUrl={questionUrl}/>
            <LeetcodeQuestionDifficulty difficulty={difficulty}/>
            <LeetcodeQuestionVideo videoUrl={videoUrl}/>
            <LeetcodeQuestionSolution solutionUrl={solutionUrl}/>
        </LeetcodeQuestionContainer>
    );
};

export default LeetcodeQuestion;
