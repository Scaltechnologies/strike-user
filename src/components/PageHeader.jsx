import { Link } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";

export default function PageHeader() {
  return (
    <div className="w-full bg-[#FCFAF8] px-6 pt-7 pb-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-xl font-black tracking-tight text-[#1A1006]"
        >
          <Zap size={18} className="fill-[#FF6B35] text-[#FF6B35]" />
          STRIKE
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm font-medium text-[#3A2A18]/60 transition-colors hover:text-[#FF6B35]"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>
      </div>
    </div>
  );
}
