import React, { useEffect } from "react";

export const GoogleAdv = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2960092495542092"
        data-ad-slot="1489967335"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
