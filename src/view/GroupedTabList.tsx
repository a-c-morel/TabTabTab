import React, { useState } from 'react'
import { Chip, Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { GroupedTabs } from '../model/GroupedTabs'
import TabItem from './TabItem'

type GroupedTabListProps = {
  tabs: GroupedTabs,
}

const GroupedTabList = (props: GroupedTabListProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpenStatus = () => setIsOpen(!isOpen)

  const tabs = props.tabs.map((tab) => {
    return <TabItem key={tab.id.value} tab={tab} />
  })

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      style={{ borderLeft: `5px solid ${props.tabs.colorCode}` }}
      disablePadding
    >
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={toggleOpenStatus}>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={toggleOpenStatus} sx={{ height: 56 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ListItemText
              primary={<Typography
                variant="h6"
                component="h6"
                >
                  {props.tabs.name}
                </Typography>
              }
            />
            <Chip label="Group" size="small" color="info" />
          </Stack>
        </ListItemButton>
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {tabs}
        </List>
      </Collapse>
    </List>
  )
}

export default GroupedTabList
