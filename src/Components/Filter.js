import { Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';

const Filter=({setTitre,setEtoile,titre,etoile})=>{
    const handleReset=()=>{
        setEtoile(0)
        setTitre('')
    }
    return(
        <div>
            <input value={titre} onChange={(e)=>setTitre(e.target.value)} type='text'/>
            <Rating value={etoile} onChange={(e)=>setEtoile(e.target.value)} name="simple-controlled"/>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default Filter
