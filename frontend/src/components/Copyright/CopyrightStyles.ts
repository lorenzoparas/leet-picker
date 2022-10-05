import styled from "styled-components";
import COLORS from "../../consts/colors";
import { FlexBoxDiv, PlainLink } from "../../styles/CommonStyles";

export const CopyrightContainer = styled(FlexBoxDiv)`
    flex-direction: column;
    position: fixed;
    left: 0;
    bottom: 5vh;
    width: 100%;
    text-align: center;
    color: ${COLORS.WHITE}
`;

export const CopyrightLink = styled(PlainLink)`
    color: ${COLORS.LIGHT_GREY};
`;
