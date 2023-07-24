import { styled } from "styled-components";
import { MdSearch } from "react-icons/md"



export default function Input({ ...rest})
{

    return (
        <Wrapper>
            <Icon />
            <input type="text" {...rest}/>
        </Wrapper>
    );
}

const Wrapper = styled.label`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 15px 10px;
    color: #fff;
    border: 1px solid ${props => props.theme.tertiary};
    border-radius: 5px;
    cursor: text;
    background: ${props => props.theme.secondary};
    input {
        width: 100%;
        background: transparent;
        border: none;
        outline: transparent;
        color: ${props => props.theme.white};
        font-size: 1.8em;
        font-family: "Sofia Sans", sans-serif;
    }
`

const Icon = styled(MdSearch)`
    fill: ${props => props.theme.white};
    font-size: 20px;
`