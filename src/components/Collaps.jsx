import { useState } from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
 
const Collaps = () => {
  const [open, setOpen] = useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={toggleOpen} className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Open Collapse 
      </Button>
      <Collapse open={open} >
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
             
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default Collaps;
