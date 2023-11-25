import React from 'react'
import mainHeaderImage from './img/react.png'
import { Search } from 'styled-icons/feather'

const images = {
    mainHeaderImage
}

const icons = {
    Search: <Search />,
}

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        grays: {
            0: 'hsl(300, 13%, 100%)',
            1: 'hsl(300, 13%, 91%)',
            2: 'hsl(300, 13%, 82%)',
            3: 'hsl(300, 13%, 73%)',
            4: 'hsl(300, 13%, 64%)',
            5: 'hsl(300, 13%, 55%)',
            6: 'hsl(300, 13%, 46%)',
            7: 'hsl(300, 13%, 37%)',
            8: 'hsl(300, 13%, 28%)',
            9: 'hsl(300, 13%, 19%)',
            10: 'hsl(300, 13%, 10%)',
        }
    }
}

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.grays[8]
        },
        contrast: {
            color: theme.colors.grays[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.grays[8]
        }
    }
}

export const Gray = {...theme,variants,images,icons}