import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    root: {
        display: 'flex'
    }
})

export default function Layout({ children }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* APP BAR */}
            {/* SIDE DRAWER */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Revocta Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}