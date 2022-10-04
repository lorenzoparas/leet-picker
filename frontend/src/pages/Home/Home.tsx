import { useState } from 'react';
import LeetcodeQuestion from '../../components/LeetcodeQuestion/LeetcodeQuestion';
import PickButton from '../../components/PickButton/PickButton';
import useLeetcodeData from '../../hooks/useLeetcodeData';
import { LeetcodeQuestionProps } from '../../components/LeetcodeQuestion/LeetcodeQuestionTypes';
import { HomeContainer } from './HomeStyles';

const Home = () => {
    const { getBlind75Data } = useLeetcodeData();
    const [currQuestion, setCurrQuestion] = useState<LeetcodeQuestionProps>({ ...getBlind75Data() });

    const onClick = () => {
        const questionData = getBlind75Data();
        setCurrQuestion(questionData);
    }

    return (
        <HomeContainer>
            <h1>Leetcode Picker</h1>
            <PickButton onClick={onClick}/>
            <LeetcodeQuestion {...currQuestion} />
        </HomeContainer>
    );
};

export default Home;