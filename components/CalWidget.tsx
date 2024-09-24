"use client"

import { useEffect } from "react";

interface CalApi {
  q: any[];
  loaded?: boolean;
  ns: Record<string, any>;
}

type CalFunction = {
  (...args: any[]): void;
} & CalApi;

interface CalWindow extends Window {
  Cal?: CalFunction;
}

const CalWidget = () => {
  useEffect(() => {
    (function (C: CalWindow, A: string, L: string) {
      let p = function (a: CalFunction, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function (this: CalFunction, ...args: any[]) {
          let cal = this;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            let script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (this: CalFunction, ...apiArgs: any[]) {
              p(this, apiArgs);
            } as CalFunction;
            api.q = api.q || [];
            const namespace = args[1];
            if (typeof namespace === "string") {
              cal.ns[namespace] = api;
              p(api, args);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        } as CalFunction;
    })(window as CalWindow, "https://cal.com/embed.js", "init");

    // Initialize the floating button widget after the script loads
    (window as CalWindow).Cal?.("floatingButton", {
      calLink: "rick", // replace 'rick' with your Cal.com username or link
      buttonColor: "#000000", // customize the button color
      buttonTextColor: "#ffffff", // customize the button text color
      buttonPosition: "bottom-right", // customize the button position
    });
  }, []);

  return null; // We don't need to render anything for this component
};

export default CalWidget;