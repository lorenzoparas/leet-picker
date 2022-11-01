import styled from "styled-components";
import { MARGIN } from "../../consts/spacing";
import { FlexBoxDiv } from "../../styles/CommonStyles";
import { DIFFICULTY_CHIP_COLORS, DIFFICULTY_TEXT_COLORS } from "../LeetcodeQuestion/LeetcodeQuestionDifficulty/LeetcodeQuestionDifficultyConsts";
import { LeetcodeQuestionDifficultyChip } from "../LeetcodeQuestion/LeetcodeQuestionDifficulty/LeetcodeQuestionDifficultyStyles";
import { DifficultyChipProps } from "./DifficultyChipsTypes";

export const DifficultyChipsContainer = styled(FlexBoxDiv)`
    width: 60vw;
    font-weight: bold;
    margin: ${MARGIN.SMALL} 0;
`;

export const DifficultyChip = styled(LeetcodeQuestionDifficultyChip)`
    margin: 0 ${MARGIN.EXTRA_SMALL};
    cursor: pointer;
    background-color: ${(props: DifficultyChipProps) => (
        props.selected ? DIFFICULTY_TEXT_COLORS[props.difficulty] : DIFFICULTY_CHIP_COLORS[props.difficulty]
    )};
    color: ${(props: DifficultyChipProps) => (
        props.selected ? DIFFICULTY_CHIP_COLORS[props.difficulty] : DIFFICULTY_TEXT_COLORS[props.difficulty]
    )};
`;
