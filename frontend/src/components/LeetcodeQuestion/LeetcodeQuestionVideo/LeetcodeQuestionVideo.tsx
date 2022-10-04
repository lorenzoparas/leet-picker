import { LeetcodeQuestionVideoContainer, LeetcodeQuestionVideoChip, LeetcodeQuestionVideoIcon } from "./LeetcodeQuestionVideoStyles";
import VideoIcon from './video-icon.png';
import { LeetcodeQuestionVideoProps } from "./LeetcodeQuestionVideoTypes";
import { PlainLink } from "../../../styles/CommonStyles";

const LeetcodeQuestionVideo = ({ videoUrl }: LeetcodeQuestionVideoProps) => {
    return (
        <LeetcodeQuestionVideoContainer>
            <PlainLink href={ videoUrl } target="_blank">
                <LeetcodeQuestionVideoChip>
                    <LeetcodeQuestionVideoIcon src={ VideoIcon } alt='video-icon'/>
                </LeetcodeQuestionVideoChip>
            </PlainLink>
        </LeetcodeQuestionVideoContainer>
    );
};

export default LeetcodeQuestionVideo;
