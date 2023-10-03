import { cva } from '../../../styled-system/css'

export type SidebarTabProps = {
  status: 'Selected' | 'Inactive' | 'Highlighted',
  label: string,
  icon: React.ReactNode,
}

export const VividSidebarTab = cva({
    base: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 'fit-content',
        padding: '0px 6px',
        width: '239px',
    }, 
    variants: {
        status: {
            Selected: {
                justifyContent: 'center',
            },
            Inactive: {
                justifyContent: 'flex-start',
            },
            Highlighted: {
                justifyContent: 'flex-start',
            },
        },
    }
})

export const VividInbox = cva({
    base: {
        fontSize: '15px',
        fontWeight: 300,
        lineHeight: '19.5px',
    },
    variants: {
        status: {
            Selected: {
                color: 'rgb(255, 255, 255)',
            },
            Inactive: {
                color: 'rgb(149, 149, 149)',
            },
            Highlighted: {
                color: 'rgb(255, 255, 255)',
            },
        },
    }
})

export const VividContent = cva({
    base: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '2px 5px 2px 9px',
        borderRadius: '6px',
        width: '100%',
        height: '32px',
    },
    variants: {
        status: {
            Selected: {
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
            },
            Inactive: {
                backgroundColor: 'rgb(25, 25, 25)',
            },
            Highlighted: {
                borderStyle: 'solid',
                borderColor: 'rgb(51, 51, 51)',
                borderWidth: '1px',
                backgroundColor: 'rgb(41, 41, 41)',
            },
        },
    }
})

