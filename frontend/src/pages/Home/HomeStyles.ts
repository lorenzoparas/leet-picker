import styled from 'styled-components';
import COLORS from '../../consts/colors';
import { FlexBoxDiv } from '../../styles/CommonStyles';

export const HomeContainer = styled(FlexBoxDiv)`
    flex-direction: column;
    background: ${COLORS.DENIM};
    color: ${COLORS.LIGHT_GREY};
    height: 100vh;
    width: 100vw;
`;