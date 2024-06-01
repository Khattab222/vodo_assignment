import { TLoading } from "../../types/loading";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

export default function Loading({ status, error, children }: LoadingProps) {
  if (status === "pending") {
    return (
      <div className="h-screen flex justify-center items-center font-bold text-slate-500">
        Loading Please Wait ....{" "}
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="h-screen flex justify-center items-center font-bold text-red-500">
        {error}{" "}
      </div>
    );
  }

  return <>{children}</>;
}
