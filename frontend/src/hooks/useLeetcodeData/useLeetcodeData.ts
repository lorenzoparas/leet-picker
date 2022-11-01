import { CategorySelections, DifficultySelections, LeetcodeQuestion } from "../../types/CommonTypes";
import blind75Data from '../../data/blind-75.json';

const useLeetcodeData = () : any => {
    
    /**
     * ///////////////////////// Blind 75 Functions /////////////////////////
     */

    const getBlind75Question = (
        selectedCategories : CategorySelections, selectedDifficulties : DifficultySelections
    ) : LeetcodeQuestion => {
        const questions = blind75Data;

        const difficultyFilteredQuestions = isDifficultySelected(selectedDifficulties)
            ? questions.filter(question => selectedDifficulties[question.difficulty])
            : questions;
            
        const categoryFilteredQuestions = isCategorySelected(selectedCategories)
            ? difficultyFilteredQuestions.filter(question => selectedCategories[question.category])
            : difficultyFilteredQuestions;
            
        return getRandomQuestionFromArray(categoryFilteredQuestions);
    };

    const getBlind75Categories = () : Array<string> => {
        let categories = blind75Data.map(data => data.category);
        return categories.filter((category, i) => categories.indexOf(category) === i).sort();
    };

    /**
     * ///////////////////////// Common Functions //////////////////////////
     */

    const isCategorySelected = (selectedCategories : CategorySelections) : boolean => {
        return (
            selectedCategories
                && Object.keys(selectedCategories).filter(category => selectedCategories[category]).length > 0
        )
    };

    const isDifficultySelected = (selectedDifficulties : DifficultySelections) : boolean => {
        return (
            selectedDifficulties
                && Object.keys(selectedDifficulties).filter(difficulty => selectedDifficulties[difficulty]).length > 0
        )
    };

    const getRandomQuestionFromArray = (arr : Array<LeetcodeQuestion>) : LeetcodeQuestion => (
        arr[Math.floor(Math.random() * arr.length)]
    );

    return {
        getBlind75Question,
        getBlind75Categories
    };
};

export default useLeetcodeData;
