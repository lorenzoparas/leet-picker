import { LeetcodeQuestionCategoryChip, LeetcodeQuestionCategoryContainer } from './LeetcodeQuestionCategoryStyles';
import { LeetcodeQuestionCategoryProps } from './LeetcodeQuestionCategoryTypes';

const eetcodeQuestionCategory = ({ category }: LeetcodeQuestionCategoryProps) => {
    return (
        <LeetcodeQuestionCategoryContainer>
            <LeetcodeQuestionCategoryChip>{ category }</LeetcodeQuestionCategoryChip>
        </LeetcodeQuestionCategoryContainer>
    )
};

export default eetcodeQuestionCategory;
