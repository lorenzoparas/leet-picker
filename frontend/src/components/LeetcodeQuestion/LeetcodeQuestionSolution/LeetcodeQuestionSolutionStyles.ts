import styled from "styled-components";
import { LeetcodeQuestionChildContainer } from "../LeetcodeQuestionStyles";
import { ButtonChip } from "../../../styles/CommonStyles";
import { FONT_SIZES } from "../../../consts/fonts";
import COLORS from "../../../consts/colors";

export const LeetcodeQuestionSolutionContainer = styled(LeetcodeQuestionChildContainer)`
    flex: 1 1 auto;
    font-size: ${FONT_SIZES.SMALL};
`;

export const LeetcodeQuestionSolutionChip = styled(ButtonChip)`
    text-decoration: none;
    color: ${COLORS.BLACK}
`;