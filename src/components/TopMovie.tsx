import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItemIcon, ListItemText, ListItem } from '@mui/material'
import React from 'react'

const TopMovie = () => {
  return (
    <Box mt={1} ml={2}>
        <Card raised>
            <CardHeader
                title='Top 10 movie of all time'
                titleTypographyProps={{
                    variant: 'h4',
                    align: 'center',
                    color: 'primary'
                }}
            />
            <CardContent>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Checkbox/>
                        </ListItemIcon>
                        <ListItemText primary='Ten phim'></ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    </Box>
  )
}

export default TopMovie