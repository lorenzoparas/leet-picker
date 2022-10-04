import { LeetcodeQuestion } from "../types/CommonTypes";
import Blind75Data from '../data/blind-75.json';

const useLeetcodeData = () : any => {
    
    const getBlind75Data = () : LeetcodeQuestion => {
        return getRandomObjectFromArray(Blind75Data);
    };

    const getRandomObjectFromArray = (arr : Array<LeetcodeQuestion>) : LeetcodeQuestion => (
        arr[Math.floor(Math.random() * arr.length)]
    );

    return {
        getBlind75Data
    };
};

export default useLeetcodeData;
