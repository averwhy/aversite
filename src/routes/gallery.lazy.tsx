import { createLazyFileRoute } from '@tanstack/react-router'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Imgix from "react-imgix";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1e293b',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function lotsOfPics(){
  var picList = [];
  for (let i = 0; i < 50; i++){
    picList.push(
      <Grid size="auto">
        <Item>
          <Imgix src="https://scmapdb.wdfiles.com/local--resized-images/wad:developer-textures/dev_256_or_032x.jpg/small.jpg"></Imgix>
        </Item>
      </Grid>
    )
  }
  return picList;
}

function Gallery() {
  return (
    <div className="p-2 text-white">
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {lotsOfPics()}
        </Grid>
      </Box>
    </div>
  )
}