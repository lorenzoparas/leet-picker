import styled from "styled-components";
import { FONT_SIZES } from "../../../consts/fonts";
import { ButtonChip } from "../../../styles/CommonStyles";
import { LeetcodeQuestionChildContainer } from "../LeetcodeQuestionStyles";

export const LeetcodeQuestionVideoContainer = styled(LeetcodeQuestionChildContainer)`
    flex: 1 1 auto;
    font-size: ${FONT_SIZES.SMALL};
`;

export const LeetcodeQuestionVideoChip = styled(ButtonChip)`

`;

export const LeetcodeQuestionVideoIcon = styled.img`
    display: flex;
    align-items: center;
    width: calc(${FONT_SIZES.SMALL} + 3px);
    height: calc(${FONT_SIZES.SMALL} + 3px);
`;
