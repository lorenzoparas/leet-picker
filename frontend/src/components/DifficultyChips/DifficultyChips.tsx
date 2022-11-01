import { DIFFICULTY_TYPES } from "./DifficultyChipsConsts";
import { DifficultyChip, DifficultyChipsContainer } from "./DifficultyChipsStyles";
import { DifficultyChipsProps } from "./DifficultyChipsTypes";

const DifficultyChips = ({ selectedDifficulties, setSelectedDifficulties } : DifficultyChipsProps) => {

    const onClick = (category : string) => setSelectedDifficulties({
        ...selectedDifficulties,
        [category]: !selectedDifficulties[category]
    });

    return (
        <DifficultyChipsContainer>
            {
                DIFFICULTY_TYPES.map(difficulty => {
                    return (
                        <DifficultyChip
                            onClick={ () => onClick(difficulty) }
                            difficulty={ difficulty }
                            selected={ selectedDifficulties[difficulty] }
                        >
                            { difficulty }
                        </DifficultyChip>
                    )
                })
            }
        </DifficultyChipsContainer>
    )
};

export default DifficultyChips;
