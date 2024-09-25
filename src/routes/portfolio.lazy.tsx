import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className='h-screen p-32 items-center justify-center'>
      hi
    </div>
  )
}

/*
<Grid container rowSpacing={10} columnSpacing={{ xs: 5, sm: 10, md: 20 }}>
          <Grid size={3}>
            <Item>1</Item>
          </Grid>
          <Grid size={3}>
            <Item>2</Item>
          </Grid>
        </Grid>
*/