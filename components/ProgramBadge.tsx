import PulseLine from "@/components/PulseLine";

export default function ProgramBadge() {
  return (
    <div className="relative inline-flex rotate-[-3deg] flex-col items-center rounded-full bg-sunshine px-6 py-4 text-center text-ink shadow-gentle">
      <span className="display-font text-lg font-extrabold tracking-wide">ART 4 AUTISM</span>
      <PulseLine animate={false} color="poppy" variant="underline" className="mt-1" />
    </div>
  );
}
