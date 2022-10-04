import styled from "styled-components";
import { LeetcodeQuestionChildContainer } from "../LeetcodeQuestionStyles";
import { MAX_QUESTION_WIDTH } from "./LeetcodeQuestionProblemConsts";

export const LeetcodeQuestionProblemContainer = styled(LeetcodeQuestionChildContainer)`
    flex: 1 1 auto;
    width: ${ MAX_QUESTION_WIDTH };
    text-align: left;
    justify-content: flex-start;
`;