import { styled } from "styled-components";
import logo from "../static/imgs/logo.png";
import { useToggle } from "../hooks/useToggle";



export default function Navbar()
{
    const { toggle, handleToggle } = useToggle(false);


    return (
        <Wrapper $open={toggle}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="hamburguer-btn hide" onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </Wrapper>       
    );
}

const Wrapper = styled.nav<{ $open?: boolean }>`
    display: flex;
    padding: 20px;
    background-color: ${props => props.theme.primary};
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.tertiary};
    .logo {
        display: flex;
        align-items: center;
        gap: 5px;
        color: ${props => props.theme.white};
        font-family: "Sofia Sans", sans-serif;
        font-weight: 900;
        font-size: 1.6em;
        
        img {
            height: 45px;
            object-fit: cover;
        }
    }
    
    .hide {
        display: none !important;
    }

    .hamburguer-btn {
        display: flex;
        width: 30px;
        height: 26px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
        margin-top: -5px;

        span {
            display: block;
            position: absolute;
            height: 4px;
            width: 100%;
            background: #ffffff;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
        }

        span:nth-child(1) {
            top: ${props => props.$open ? '50%' : 'calc(50% - 10px)'};
            transform: ${props => props.$open ? 'rotate(135deg)' : 'rotate(0deg)'};
        }

        span:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
            left: ${props => props.$open ? '-60px' : '0'};
            opacity: ${props => props.$open ? '0' : '1'};
            transform: ${props => props.$open ? 'rotate(0deg)' : 'rotate(0deg)'};
        }

        span:nth-child(3) {
            transform: translateY(-50%);
            top: ${props => props.$open ? '50%' : 'calc(50% + 10px)'};
            transform: ${props => props.$open ? 'rotate(-135deg)' : 'rotate(0deg)'};
        }
    }
`