import LeetcodeQuestionDifficulty from "./LeetcodeQuestionDifficulty/LeetcodeQuestionDifficulty";
import LeetcodeQuestionProblem from "./LeetcodeQuestionProblem/LeetcodeQuestionProblem";
import LeetcodeQuestionVideo from "./LeetcodeQuestionVideo/LeetcodeQuestionVideo";
import { LeetcodeQuestionContainer } from "./LeetcodeQuestionStyles";
import LeetcodeQuestionSolution from "./LeetcodeQuestionSolution/LeetcodeQuestionSolution";
import { LeetcodeQuestionProps } from "./LeetcodeQuestionTypes";
import LeetcodeQuestionCategory from "./LeetcodeQuestionCategory/LeetcodeQuestionCategory";
import { EMPTY_MESSAGE } from "./LeetcodeQuestionConsts";

const LeetcodeQuestion = (props : LeetcodeQuestionProps) => {
    const { name, questionUrl, category, difficulty, videoUrl, solutionUrl } = props;

    const isEmpty = () : boolean => {
        return Object.keys(props).length === 0;
    };

    return ( isEmpty() ? <p>{ EMPTY_MESSAGE }</p>
        : (
            <LeetcodeQuestionContainer>
                <LeetcodeQuestionProblem name={name} questionUrl={questionUrl}/>
                <LeetcodeQuestionCategory category={category}/>
                <LeetcodeQuestionDifficulty difficulty={difficulty}/>
                <LeetcodeQuestionVideo videoUrl={videoUrl}/>
                <LeetcodeQuestionSolution solutionUrl={solutionUrl}/>
            </LeetcodeQuestionContainer>
        )
    );
};

export default LeetcodeQuestion;
