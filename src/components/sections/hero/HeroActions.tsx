import Button from "../../ui/Button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <Button className="min-w-44">
        View My Work
      </Button>

      <Button
        variant="secondary"
        className="min-w-44"
      >
        Contact Me
      </Button>
    </div>
  );
}