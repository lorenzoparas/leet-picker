import styled from "styled-components";
import { FONT_SIZES } from "../../../consts/fonts";
import { LeetcodeQuestionChildContainer } from "../LeetcodeQuestionStyles";
import { Chip } from "../../../styles/CommonStyles";
import { WIDTH } from "../../../consts/spacing";
import COLORS from "../../../consts/colors";

export const LeetcodeQuestionCategoryContainer = styled(LeetcodeQuestionChildContainer)`
    flex: 1 1 auto;
    font-size: ${FONT_SIZES.SMALL};
`;

export const LeetcodeQuestionCategoryChip = styled(Chip)`
    text-align: center;
    min-width: ${WIDTH.EXTRA_EXTRA_LARGE};
    background-color: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
`;
