import { ButtonContainer } from "./styles";


const Button = ({ label, onClick, disabled }) => {
    return (
        <ButtonContainer onClick={onClick} type="button" disabled={disabled}>
            {label}
        </ButtonContainer>
    );
}

export default Button;