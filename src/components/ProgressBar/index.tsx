import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledMultiProgressBarContainer = styled.div`
    width: 100%;
`;

const StyledBarsContainer = styled.div`
    height: 6px;
    display: flex;
    justify-content: space-between;
`;

const StyledBar = styled.div<{ itemColor: string; itemWidth: number }>`
    ${({ itemColor, itemWidth }) => {
        return css`
            background-color: ${itemColor};
            width: ${itemWidth}%;
            margin-right: 5px;
        `;
    }}
`;

const ProgressBar: FC<{
    countSteps?: any,
    data?: any,
}> = ({ countSteps, data, children, ...props }) => {
    return (
        <>
            <StyledMultiProgressBarContainer {...props}>
                <StyledBarsContainer {...props}>
                    {data &&
                        data.length &&
                        data.map((item, index) => {
                            return item.width > 0 ? (
                                <StyledBar
                                    {...props}
                                    key={index}
                                    itemColor={item.color}
                                    itemWidth={item.width}
                                />
                            ) : null;
                        })}
                </StyledBarsContainer>
            </StyledMultiProgressBarContainer>
            {children}
        </>
    );
};

export default ProgressBar;