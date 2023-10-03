import { sva } from '../../styled-system/css'
import { createStyleContext } from '../style-contexts'

const StepBarStyles = sva({
    slots: ["root"],
    base: {
        root: {
            overflow: "hidden",
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            height: 'fit-content',
            padding: '12px 10px',
            borderRadius: '8px',
            width: '100%',
            borderStyle: 'solid',
            borderColor: 'rgb(225, 226, 230)',
            borderWidth: '1px',
            backgroundColor: 'rgb(255, 255, 255)',
            fontFamily: 'Helvetica Neue',
        },
    },
})

const { withProvider } = createStyleContext(StepBarStyles)

const Root = withProvider("div", "root");

export const StepBar = { Root };
