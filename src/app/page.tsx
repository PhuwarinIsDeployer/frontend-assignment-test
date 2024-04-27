import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black text-white h-screen ">
      <div>
        <Button variant="contained">
          <Link className="pr-4" href="/todo-list">
            Assignment1
          </Link>
        </Button>
      </div>
    </div>
  );
}
