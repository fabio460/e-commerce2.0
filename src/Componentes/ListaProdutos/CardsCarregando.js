import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardsCarregando() {
  const cards = [1,2,3,4,5,6,7,8]  
  return (
      <div className='cardsCarregando'>
        {cards.map(item=>{
            return <div >
              <Stack spacing={1}>
              <Skeleton variant="rectangular" width={"100%"} height={260} />
              <Skeleton variant="text" sx={{ fontSize: '' }} width={"100%"}/>
              <Skeleton variant="text" sx={{ fontSize: '' }} width={"100%"}/>
              <Skeleton variant="text" sx={{ fontSize: '' }} width={"100%"}/>
            </Stack>
            </div>
        })}
      </div>
  );
}
