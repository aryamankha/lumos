import { sva } from '../../styled-system/css'
import { createStyleContext } from '../style-contexts'

export type StepProps = {
    status: "Done" | "Active" | "To Do";
    text: string;
    number: string;
}

const StepStyles = sva({
    slots: ["root", "stepIcon", "stepIconText", "stepText"],
    base: {
        root: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: 'fit-content',
            height: 'fit-content',
        },
        stepIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '9999px',
            width: '20px',
            height: '20px',
        },
        stepIconText: {
            color: 'rgb(255, 255, 255)',
            fontSize: '12px',
            fontWeight: '300',
            letterSpacing: '-0.1px',
        },
        stepText: {
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '-0.1px',
        },
    }, 
    variants: {
        status: {
            Done: {
                stepText: {
                    color: 'rgb(123, 129, 138)',
                },
            },
            Active: {
                stepIcon: {
                    background: 'linear-gradient(90deg, rgb(217, 52, 118) 0%, rgb(229, 127, 57) 100%)',
                },
                stepText: {
                    color: 'rgb(80, 86, 98)',
                },
            },
            'To Do': {
                stepIcon: {
                    backgroundColor: 'rgb(225, 226, 230)',
                },
                stepText: {
                    color: 'rgb(123, 129, 138)',
                },
            },
        },
    }
})


const { withProvider, withContext } = createStyleContext(StepStyles)

const Root = withProvider("div", "root");

const StepIcon = withContext("div", "stepIcon");

const StepText = withContext("p", "stepText");

const StepIconText = withContext("p", "stepIconText");

export const Step = { Root, StepIcon, StepIconText, StepText};
