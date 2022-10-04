import { LeetcodeQuestionDifficultyChip, LeetcodeQuestionDifficultyContainer } from './LeetcodeQuestionDifficultyStyles';
import { LeetcodeQuestionDifficultyProps } from './LeetcodeQuestionDifficultyTypes';

const LeetcodeQuestionDifficulty = ({ difficulty }: LeetcodeQuestionDifficultyProps) => {
    return (
        <LeetcodeQuestionDifficultyContainer>
            <LeetcodeQuestionDifficultyChip difficulty={ difficulty }>{ difficulty }</LeetcodeQuestionDifficultyChip>
        </LeetcodeQuestionDifficultyContainer>
    )
};

export default LeetcodeQuestionDifficulty;
