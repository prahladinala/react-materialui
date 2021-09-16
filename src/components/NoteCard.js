import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { DeleteOutline } from '@material-ui/icons';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    test: {
        border: (note) => {
            if (note.category == 'work') {
                return '1px solid red'
            }
        }
    }
})
export default function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note)

    return (
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutline />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}