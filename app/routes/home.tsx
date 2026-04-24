import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div data-visual-ci-test="inline-screenshot-comment-rerun">
      <p style={{ position: "absolute", left: 24, top: 24 }}>Visual CI retest</p>
      <Welcome />
    </div>
  );
}
