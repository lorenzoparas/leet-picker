import { ICONS8, LORENZO_PARAS } from "./CopyrightConsts";
import { CopyrightContainer, CopyrightLink } from "./CopyrightStyles";

const Copyright = () => {
    return (
        <CopyrightContainer>
            <CopyrightLink
                target="_blank"
                href={LORENZO_PARAS.LINK}
            >
                {LORENZO_PARAS.TEXT}
            </CopyrightLink>
            <CopyrightLink
                target="_blank"
                href={ICONS8.LINK}
            >
                {ICONS8.TEXT}
            </CopyrightLink>
        </CopyrightContainer>
    );
};

export default Copyright;
