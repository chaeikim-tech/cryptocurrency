import styled from "styled-components"

interface ContainerProps {
    bgColor:string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

//Interface = object shape를 TypeScript에게 설명해줌
interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text" }: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>;
}

export default Circle;