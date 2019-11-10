import React, { useState } from 'react';
import { ProgressBar } from '../../components';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles: any = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const StyledMainContainer = styled.div`
    width: 600px;
    height: 100px;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

const DefaultExample = () => {
    const classes = useStyles();
    const countSteps = 6;
    const widthStep = Math.ceil(100 / countSteps);
    const defaultColor = 'red';
    const newColor = 'black';
    const values = [
        {
            name: 'step-1',
            width: widthStep,
            color: newColor,
        },
        {
            name: 'step-2',
            width: widthStep,
            color: defaultColor,
        },
        {
            name: 'step-3',
            width: widthStep,
            color: defaultColor,
        },
        {
            name: 'step-4',
            width: widthStep,
            color: defaultColor,
        },
        {
            name: 'step-5',
            width: widthStep,
            color: defaultColor,
        },
        {
            name: 'step-6',
            width: widthStep,
            color: defaultColor,
        },
    ];

    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState(values);

    const nextStep = () => {
        setCurrentStep((currentStep) => (currentStep < countSteps ? currentStep + 1 : currentStep));
        setData((data) => {
            if (currentStep < countSteps) {
                data[currentStep].color = '#0099DA';
            }

            return data;
        });
    };

    const prevStep = () => {
        setCurrentStep((currentStep) => (currentStep > 1 ? currentStep - 1 : currentStep));
        setData((data) => {
            if (currentStep > 1) {
                data[currentStep - 1].color = '#DEE1E3';
            }

            return data;
        });
    };

    return (
        <StyledMainContainer>
            <ProgressBar countSteps={countSteps} data={data} />
            <StyledButtonContainer>
                <Button onClick={() => nextStep()} variant="contained" className={classes.button}>
                    Дальше
                </Button>
                <Button onClick={() => prevStep()} variant="contained" className={classes.button}>
                    Назад
                </Button>
            </StyledButtonContainer>
        </StyledMainContainer>
    )
}

export default DefaultExample;