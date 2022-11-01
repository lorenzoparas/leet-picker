import { useState } from 'react';
import LeetcodeQuestion from '../../components/LeetcodeQuestion/LeetcodeQuestion';
import PickButton from '../../components/PickButton/PickButton';
import useLeetcodeData from '../../hooks/useLeetcodeData/useLeetcodeData';
import { LeetcodeQuestionProps } from '../../components/LeetcodeQuestion/LeetcodeQuestionTypes';
import { HomeContainer } from './HomeStyles';
import FaviconCopyright from '../../components/Copyright/Copyright';
import CategoryChips from '../../components/CategoryChips/CategoryChips';
import DifficultyChips from '../../components/DifficultyChips/DifficultyChips';
import HomeTitle from './HomeTitle/HomeTitle';
import { DifficultySelections, CategorySelections } from '../../types/CommonTypes';

const Home = () => {
    const { getBlind75Question } = useLeetcodeData();

    const [currQuestion, setCurrQuestion] = useState<LeetcodeQuestionProps>({ ...getBlind75Question() });
    const [selectedCategories, setSelectedCategories] = useState<CategorySelections>({});
    const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultySelections>({});

    const onClick = () => {
        const questionData = getBlind75Question(selectedCategories, selectedDifficulties);
        setCurrQuestion(questionData);
    };

    return (
        <HomeContainer>
            <HomeTitle/>
            <DifficultyChips
                selectedDifficulties={selectedDifficulties}
                setSelectedDifficulties={setSelectedDifficulties}
            />
            <CategoryChips selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
            <PickButton onClick={onClick}/>
            <LeetcodeQuestion {...currQuestion}/>
            <FaviconCopyright/>
        </HomeContainer>
    );
};

export default Home;