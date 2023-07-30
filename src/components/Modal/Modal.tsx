import { styled } from "styled-components";


interface Props {
    modalState: Array<any>
}

export default function Modal({ modalState, children }: React.PropsWithChildren<Props>)
{
    const [isHide, setIsHide] = modalState;

    function handleHide(e)
    {
        if(e.target !== e.currentTarget) return;
        
        setIsHide(() => !isHide);
    }

    return (
        <Wrapper $hide={isHide} onClick={(e) => handleHide(e)}>
            <div className="content">
                {
                    children
                }
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ $hide: boolean }>`
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 999;
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    display: ${props => props.$hide ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    padding: 20px;
    cursor: pointer;

    .content {
        
        cursor: auto;
    }
`;