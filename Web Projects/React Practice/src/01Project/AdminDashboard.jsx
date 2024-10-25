import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material/';
import AllUser from './AdminOptions/AllUser';
import FetchPosts from './AdminOptions/FetchPosts';
import Logout from './AdminOptions/Logout';
import AdminPic from './img/admin.png'
import FetchPostsForAdmin from './AdminOptions/FetchPostsForAdmin';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ width: '100%', padding: 0 }}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function AdminDashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <h1 style={{ margin: '0', backgroundColor: '#1976d2', color: 'white', textAlign: 'center', padding: '10px' }}>Admin Dashboard</h1>
            <img src={AdminPic} style={{ width: '7%', position: 'absolute', top: '18%', left: '5%' }} alt="" />
            <Box sx={{ display: 'flex', gap: '20px', margin: '20px', borderRadius: '15px' }}>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderColor: 'divider', width: '200px', display: 'flex', padding: '100px 0', marginTop: '70px' }}
                >
                    <Tab label="All Users" {...a11yProps(0)} />
                    <Tab label="All Posts" {...a11yProps(1)} />
                    <Tab label="Logout" {...a11yProps(2)} />
                </Tabs>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <TabPanel value={value} index={0}>
                        <AllUser />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FetchPostsForAdmin />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Logout />
                    </TabPanel>
                </Box>
            </Box>
        </div >
    );
}
