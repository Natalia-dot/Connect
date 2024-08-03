import { ProgressSpinner } from 'primereact/progressspinner';
import { FlexDir } from '../StyleComponents';

export const Loading = () => {
  return (
    <>
    <FlexDir width={"98vw"} margin={"22vh 0 30vh"}>
   <ProgressSpinner />
   </FlexDir>
    </>
  )
}
