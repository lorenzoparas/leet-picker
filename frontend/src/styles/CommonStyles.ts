import styled from "styled-components"
import { PADDING, BORDER_SIZE, BORDER_RADIUS } from "../consts/spacing";
import COLORS from "../consts/colors";

export const FlexBoxDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PointerButton = styled.button`
    cursor: pointer;
`;

export const Chip = styled.div`
    border-radius: ${BORDER_RADIUS.MAX};
    padding: ${PADDING.EXTRA_SMALL} ${PADDING.SMALL};
`;

export const ButtonChip = styled(Chip)`
    cursor: pointer;
    background-color: ${COLORS.WHITE};
    border: ${BORDER_SIZE.EXTRA_SMALL} solid ${COLORS.BLACK};
`;

export const PlainLink = styled.a`
    text-decoration: none;
    color: black;
`;
