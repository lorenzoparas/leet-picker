import styled from "styled-components";
import COLORS from "../../consts/colors";
import { MARGIN } from "../../consts/spacing";
import { Chip, FlexBoxDiv } from "../../styles/CommonStyles";
import { CategoryChipProps } from "./CategoryChipsTypes";

export const CategoryChipsContainer = styled(FlexBoxDiv)`
    width: 60vw;
    flex-wrap: wrap;
`;

export const CategoryChip = styled(Chip)`
    text-align: center;
    margin: ${MARGIN.EXTRA_SMALL};
    width: max-content;
    min-width: 0;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props : CategoryChipProps) => props.selected ? COLORS.BLACK : COLORS.WHITE};
    color: ${(props : CategoryChipProps) => props.selected ? COLORS.WHITE : COLORS.BLACK};
`;
