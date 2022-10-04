import styled from "styled-components";
import COLORS from "../../consts/colors";
import { FONT_SIZES } from "../../consts/fonts";
import { BORDER_RADIUS, BORDER_SIZE, PADDING } from "../../consts/spacing";
import { FlexBoxDiv } from "../../styles/CommonStyles";

export const LeetcodeQuestionContainer = styled(FlexBoxDiv)`
    border-radius: ${BORDER_RADIUS.LARGE};
    background-color: ${COLORS.LIGHT_GREY};
    border: ${BORDER_SIZE.EXTRA_SMALL} solid ${COLORS.BLACK};
    padding: ${PADDING.MEDIUM} ${PADDING.MEDIUM};
`;

export const LeetcodeQuestionChildContainer = styled(FlexBoxDiv)`
    height: 100%;
    padding: 0 ${PADDING.SMALL};
    color: ${COLORS.BLACK};
    font-weight: bold;
    font-size: ${FONT_SIZES.SMALL};
`;