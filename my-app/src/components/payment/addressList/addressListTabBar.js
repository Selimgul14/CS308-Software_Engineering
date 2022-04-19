import AddressListTabBarCard from './addressListTabBarCard';
import { Grid } from '@mui/material';
import { Stack, Box } from '@mui/material';
import AddressListForm from './addressListForm';
/*
const addressListTabBar = () => {
    return <div>
        <Grid container spacing={0}
        >
            <Grid item xs={6}>
        <AddressListTabBarCard/>
            </Grid>
            <Grid item xs={6}>
        <AddressListTabBarCard/>
        </Grid>
       </Grid>
        
    </div>

}
*/

const addressListTabBar = () => {
    return <Box sx={{bgcolor:"#FFFFFF"}}>
    <Stack direction="column">
        <Stack direction="row">
        <AddressListTabBarCard title="ADDRESS INFORMATION" description="Select a saved address or create a new address." isOpen={true}/>
        <AddressListTabBarCard title="PAYMENT INFORMATION" description="Select a saved credit card or enter your credit card information." isOpen={false}/>
        </Stack>
        <AddressListForm></AddressListForm>
        
    </Stack>
    </Box>
}

export default addressListTabBar;  

