import Tab from '@mui/material/Tab';
import { TabPanel,TabList ,TabContext} from '@mui/lab';
import React from 'react';
import { Box } from '@mui/system';
import { useState } from 'react';
import { SignUpComponent } from '@/app/Component/Login/SignUpComponent';
import { LogInComponent } from '@/app/Component/Login/LoginComponent';
const LoginPage=()=>{

    const [value, setValue] = React.useState('1');

    const handleChange = (event:React.SyntheticEvent<Element,Event>, newValue:string) => {
      setValue(newValue);
    };
    
    return(
        <div style={{width:'30%',minWidth:300 , marginLeft:'auto' , marginRight:'auto' , border:'1px solid' , borderRadius:10}}>
                 <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="LogIn" value="1" />
                    <Tab label="SignUp" value="2" />
                    
                </TabList>
                </Box>
                <TabPanel value="1"><LogInComponent/></TabPanel>
                <TabPanel value="2"><SignUpComponent/></TabPanel>
                
            </TabContext>
            </Box>
        </div>
    )
}
export default LoginPage;