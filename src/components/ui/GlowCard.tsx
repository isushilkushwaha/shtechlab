type Props = {
  children: React.ReactNode;
};

const GlowCard = ({ children }: Props) => {
  return (
    <div className="relative group h-full">

      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-40" />

      {/* Card */}
      <div className="relative h-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;