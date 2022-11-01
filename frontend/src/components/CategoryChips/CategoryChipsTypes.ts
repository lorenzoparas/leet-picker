import { CategorySelections } from "../../types/CommonTypes";

export type CategoryChipProps = {
    selected: boolean;
};

export type CategoryChipsProps = {
    selectedCategories: CategorySelections;
    setSelectedCategories: Function;
};
