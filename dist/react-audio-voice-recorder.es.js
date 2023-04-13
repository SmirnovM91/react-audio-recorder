(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;width:40px;display:flex;align-items:center;transition:all .2s ease-in}.audio-recorder-mic{color:#000;padding:0;width:40px;height:40px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}.audio-recorder-mic-button{width:50px;height:50px;border-radius:50%;background-color:#ebebeb;cursor:pointer;padding:15px;display:flex;align-items:center;justify-content:center}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import c, { useState as a, useRef as b, useCallback as R, useEffect as A } from "react";
const x = () => {
  const [I, o] = a(!1), [e, u] = a(!1), [D, z] = a(0), t = b(), [d, r] = a(), [y, j] = a(), L = () => {
    const i = setInterval(() => {
      z((M) => M + 1);
    }, 1e3);
    r(i);
  }, s = () => {
    d != null && clearInterval(d), r(void 0);
  };
  return {
    startRecording: R(
      (i) => {
        d == null && navigator.mediaDevices.getUserMedia({ audio: !0 }).then((M) => {
          var g, N, C;
          const n = [], w = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4";
          t.current = new MediaRecorder(M, {
            mimeType: w
          }), (g = t.current) == null || g.addEventListener("dataavailable", (m) => {
            m.data.size > 0 && n.push(m.data);
          }), (N = t.current) == null || N.addEventListener("stop", () => {
            var m;
            j(
              new Blob(n, { type: (m = t.current) == null ? void 0 : m.mimeType })
            ), t.current = null;
          }), (C = t.current) == null || C.start(), L(), o(!0);
        }).catch((M) => {
          i && i(M);
        });
      },
      [d]
    ),
    stopRecording: () => {
      var i;
      (i = t == null ? void 0 : t.current) == null || i.stop(), s(), z(0), o(!1), u(!1);
    },
    togglePauseResume: () => {
      var i, M;
      e ? (u(!1), (i = t == null ? void 0 : t.current) == null || i.resume(), L()) : (u(!0), s(), (M = t == null ? void 0 : t.current) == null || M.pause());
    },
    recordingBlob: y,
    isRecording: I,
    isPaused: e,
    recordingTime: D
  };
}, v = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", p = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==";
const O = ({
  onRecordingComplete: I,
  recorderControls: o,
  classes: e,
  onError: u
}) => {
  var S, i, M, n, w, g, N;
  const {
    startRecording: D,
    stopRecording: z,
    togglePauseResume: t,
    recordingBlob: d,
    isRecording: r,
    isPaused: y,
    recordingTime: j
  } = o != null ? o : x(), [L, s] = a(!1), T = (C = !0) => {
    s(C), z();
  }, l = () => {
    D(u);
  };
  return A(() => {
    (L || o) && d != null && I != null && I(d);
  }, [d]), r ? /* @__PURE__ */ c.createElement("div", {
    className: `audio-recorder ${r ? "recording" : ""} ${(M = e == null ? void 0 : e.AudioRecorderClass) != null ? M : ""}`,
    "data-testid": "audio_recorder"
  }, r ? /* @__PURE__ */ c.createElement("span", {
    className: `audio-recorder-status ${r ? "" : "display-none"} ${(n = e == null ? void 0 : e.AudioRecorderStatusClass) != null ? n : ""}`
  }, /* @__PURE__ */ c.createElement("span", {
    className: "audio-recorder-status-dot"
  }), "Recording") : /* @__PURE__ */ c.createElement("img", {
    src: v,
    className: `audio-recorder-mic ${(w = e == null ? void 0 : e.AudioRecorderStartSaveClass) != null ? w : ""}`,
    onClick: l,
    "data-testid": "ar_mic",
    title: "start recording"
  }), /* @__PURE__ */ c.createElement("span", {
    className: `audio-recorder-timer ${r ? "" : "display-none"} ${(g = e == null ? void 0 : e.AudioRecorderTimerClass) != null ? g : ""}`,
    "data-testid": "ar_timer"
  }, Math.floor(j / 60), ":", String(j % 60).padStart(2, "0")), /* @__PURE__ */ c.createElement("img", {
    src: p,
    className: `audio-recorder-options ${r ? "" : "display-none"} ${(N = e == null ? void 0 : e.AudioRecorderDiscardClass) != null ? N : ""}`,
    onClick: () => T(!0),
    title: "Discard Recording",
    "data-testid": "ar_cancel"
  })) : /* @__PURE__ */ c.createElement("div", {
    className: `audio-recorder-mic-button ${(S = e == null ? void 0 : e.AudioRecorderClass) != null ? S : ""}`,
    onClick: l
  }, /* @__PURE__ */ c.createElement("img", {
    src: v,
    className: `audio-recorder-mic ${(i = e == null ? void 0 : e.AudioRecorderStartSaveClass) != null ? i : ""}`,
    "data-testid": "ar_mic",
    title: "start recording"
  }));
};
export {
  O as AudioRecorder,
  x as useAudioRecorder
};
