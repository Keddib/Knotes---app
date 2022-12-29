import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Note from "src/components/note";

export default function Main() {
  const location = useLocation();
  useEffect(() => {
    console.log("location", location);
  }, [location]);
  return (
    <div className="h-full rounded-3xl">
      <Note />
    </div>
  );
}
