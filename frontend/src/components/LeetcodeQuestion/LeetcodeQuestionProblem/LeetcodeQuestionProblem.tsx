import React from 'react';
import { PlainLink } from '../../../styles/CommonStyles';
import { LeetcodeQuestionProblemContainer } from './LeetcodeQuestionProblemStyles';
import { LeetcodeQuestionProblemProps } from './LeetcodeQuestionTypes';

const LeetcodeQuestionProblem = ({ name, questionUrl }: LeetcodeQuestionProblemProps) => {
    return (
        <LeetcodeQuestionProblemContainer>
            <PlainLink href={questionUrl} target='_blank'>
                { name }
            </PlainLink>
        </LeetcodeQuestionProblemContainer>
    );
};

export default LeetcodeQuestionProblem;
