import { PlainLink } from "../../../styles/CommonStyles";
import { SOLUTION_CHIP_TEXT } from "./LeetcodeQuestionSolutionConsts";
import { LeetcodeQuestionSolutionChip, LeetcodeQuestionSolutionContainer } from "./LeetcodeQuestionSolutionStyles";
import { LeetcodeQuestionSolutionProps } from "./LeetcodeQuestionSolutionTypes";

const LeetcodeQuestionSolution = ({ solutionUrl }: LeetcodeQuestionSolutionProps) => {
    return (
        <LeetcodeQuestionSolutionContainer>
            <PlainLink href={ solutionUrl } target="_blank">
                <LeetcodeQuestionSolutionChip>
                    { SOLUTION_CHIP_TEXT }
                </LeetcodeQuestionSolutionChip>
            </PlainLink>
        </LeetcodeQuestionSolutionContainer>
    )
};

export default LeetcodeQuestionSolution;
