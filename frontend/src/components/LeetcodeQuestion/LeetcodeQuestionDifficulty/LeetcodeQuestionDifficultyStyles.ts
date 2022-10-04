import styled from "styled-components";
import { FONT_SIZES } from "../../../consts/fonts";
import { LeetcodeQuestionChildContainer } from "../LeetcodeQuestionStyles";
import { DIFFICULTY_CHIP_COLORS, DIFFICULTY_TEXT_COLORS } from "./LeetcodeQuestionDifficultyConsts";
import { LeetcodeQuestionDifficultyChipProps } from "./LeetcodeQuestionDifficultyTypes";
import { Chip } from "../../../styles/CommonStyles";
import { WIDTH } from "../../../consts/spacing";

export const LeetcodeQuestionDifficultyContainer = styled(LeetcodeQuestionChildContainer)`
    flex: 1 1 auto;
    font-size: ${FONT_SIZES.SMALL};
`;

export const LeetcodeQuestionDifficultyChip = styled(Chip)`
    text-align: center;
    min-width: ${WIDTH.EXTRA_LARGE};
    background-color: ${(props: LeetcodeQuestionDifficultyChipProps) => DIFFICULTY_CHIP_COLORS[props.difficulty]};
    color: ${(props: LeetcodeQuestionDifficultyChipProps) => DIFFICULTY_TEXT_COLORS[props.difficulty]};
`;
