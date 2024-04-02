import React from "react";
import styled from "styled-components";

type Props = {
    size: string;
    color: string;
    text?: string;
    style?: React.CSSProperties;
};

const Container = styled.div<Props>`
    font-weight: 600;
    font-size: ${({ size }) => size};
    color: ${({ color }) => color};
`;

export const Title = ({ size, color, text, style }: Props) => {
    return (
        <Container style={style} size={size} color={color}>
            {text}
        </Container>
    );
};
