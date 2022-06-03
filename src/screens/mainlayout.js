import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Headlines from './dashboardscreens/headlines';
import News from './dashboardscreens/news';
import NewsOne from './dashboardscreens/newsone';

const drawerWidth = 240;


export default function MainLayout() {
    const [routeList,setRouteList] = React.useState([
        {
        routeName : 'NEWS',
        route : "news",
      
    },
    {
        routeName : 'Headlines',
        route : "headlines",
      
    },

    {
        routeName : 'Articles'
      
    }

])
const navigate = useNavigate()
const moveToRoute = (route)=>{
  navigate(route)
}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            NEWS APP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {routeList.map((text, index) => (
            <ListItem onClick = {()=>moveToRoute(text.route)} key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.routeName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
            <Route path = 'headlines' element = {<Headlines/>}></Route>
            <Route path = 'news' element = {<News/>}></Route>
            <Route path = 'newssone' element = {<NewsOne/>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
