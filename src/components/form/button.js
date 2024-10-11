import { useState, CSSProperties } from "react";
import { Oval } from "react-loader-spinner";

import { Button as ShadcnButton } from "@/components/ui/button";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function Button({
  children,
  onClick,
  variant,
  label = "submit",
  loadingLabel = "submitting",
  successLabel = "success",
  icon,
  success,
  successIcon,
  loading,
}) {
  // let [loading, setLoading] = useState(false);

  const _label = loading ? loadingLabel : success ? successLabel : label;

  return (
    <div className="sweet-loading relative">
      {loading ? (
        <span className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-red z-50 cursor-default"></span>
      ) : null}
      <ShadcnButton
        onClick={onClick}
        variant={variant}
        className="flex h-full items-center gap-2"
      >
        {!loading ? (success ? successIcon : icon) : null}
        <Oval
          visible={loading}
          height="20"
          width="20"
          color="#4fa94d"
          ariaLabel="oval-loading"
          strokeWidth={5}
          wrapperStyle={{}}
          wrapperClass=""
        />
        {_label}
      </ShadcnButton>
    </div>
  );
}
