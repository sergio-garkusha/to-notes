import { useLocation } from "react-router-dom";

export default function AuthorsPage() {
  const location = useLocation();
  return <h1>{location.pathname} Page Content</h1>;
}
