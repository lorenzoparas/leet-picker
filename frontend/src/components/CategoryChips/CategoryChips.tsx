/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import useLeetcodeData from "../../hooks/useLeetcodeData/useLeetcodeData";
import { CategorySelections } from "../../types/CommonTypes";
import { CategoryChipsContainer, CategoryChip } from "./CategoryChipsStyles";
import { CategoryChipsProps } from "./CategoryChipsTypes";

const CategoryChips = ({ selectedCategories, setSelectedCategories } : CategoryChipsProps ) => {
    const { getBlind75Categories } = useLeetcodeData();

    useEffect(() => {
        initSelectedCategories();
    }, []);

    const initSelectedCategories = useCallback(() => {
        const newSelectedCategories : CategorySelections = {};
        getBlind75Categories().forEach((category : string) => newSelectedCategories[category] = false);
        setSelectedCategories(newSelectedCategories);
    }, [getBlind75Categories]);

    const onClick = (category : string) => setSelectedCategories({
        ...selectedCategories,
        [category]: !selectedCategories[category]
    });

    return (
        <CategoryChipsContainer>
            {
                Object.entries(selectedCategories).map(([category, selected]) => {
                    return (
                        <CategoryChip
                            onClick={ () => onClick(category) }
                            selected={ selected }>
                            { category }
                        </CategoryChip>
                    );
                })
            }
        </CategoryChipsContainer>
    );
};

export default CategoryChips;
