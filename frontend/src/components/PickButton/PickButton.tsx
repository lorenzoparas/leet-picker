import { PICK_BUTTON_TEXT } from './PickButtonConsts';
import { PrimaryButton } from './PickButtonStyles';
import { PickButtonProps } from './PickButtonTypes';

const PickButton = ({ onClick }: PickButtonProps) => {
    return (
        <PrimaryButton onClick={() => onClick()}>
            { PICK_BUTTON_TEXT }
        </PrimaryButton>
    )
};

export default PickButton;
