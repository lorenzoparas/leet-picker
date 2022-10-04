import styled from "styled-components";
import COLORS from "../../consts/colors";
import { FONTS, FONT_SIZES } from "../../consts/fonts";
import { PointerButton } from "../../styles/CommonStyles";
import { BORDER_RADIUS, PADDING, MARGIN } from "../../consts/spacing";

export const PrimaryButton = styled(PointerButton)`
    background-color: ${COLORS.MARIGOLD};
    font-family: ${FONTS.OPEN_SANS};
    font-size: ${FONT_SIZES.LARGE};
    padding: ${PADDING.EXTRA_SMALL} ${PADDING.MEDIUM};    
    margin: 0 ${MARGIN.SMALL} ${MARGIN.SMALL} ${MARGIN.SMALL};
    color: ${COLORS.DENIM};
    border-radius: ${BORDER_RADIUS.EXTRA_SMALL};
    font-weight: bold;
    border: 0;
`;