export const navbarStyles = {
    drawer: {
        width: 240,
        height: '100vh',
        flexShrink: 0,   
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor:'#081627',
            // backgroundColor: '#101F33',
            color: 'rgba(255,255,255,0.7)',
        },
    },
    '& .Mui-selected': {
        color: 'red',
    },

    box: {
        margin: '24px 16px'
    },
    
    title: {
        color: '#fff',
        marginLeft: '16px',
    },

    caption: {
        marginLeft: '16px',
        color: 'rgba(255,255,255,0.3)',
    },

    divider: {
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    
    icons: {
        color: 'rgba(255,255,255,0.7)',
        // marginLeft: '20px'
    },

    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px'
        }
    }
}