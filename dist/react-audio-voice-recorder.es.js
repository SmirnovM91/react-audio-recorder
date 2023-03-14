(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;width:40px;display:flex;align-items:center;padding:12px;transition:all .2s ease-in}.audio-recorder-mic{cursor:pointer;height:16px;color:#000}.audio-recorder-timer,.audio-recorder-status{margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{height:16px;margin-left:10px;cursor:pointer}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import L, { useState as d, useCallback as y, useEffect as A } from "react";
const n = () => {
  const [a, t] = d(!1), [M, j] = d(!1), [z, o] = d(0), [i, g] = d(), [c, I] = d(), [C, u] = d(), w = () => {
    const N = setInterval(() => {
      o((e) => e + 1);
    }, 1e3);
    I(N);
  }, D = () => {
    c != null && clearInterval(c), I(void 0);
  };
  return {
    startRecording: y(() => {
      c == null && navigator.mediaDevices.getUserMedia({ audio: !0 }).then((N) => {
        t(!0);
        const e = new MediaRecorder(N);
        g(e), e.start(), w(), e.addEventListener("dataavailable", (T) => {
          u(T.data), e.stream.getTracks().forEach((m) => m.stop()), g(null);
        });
      }).catch((N) => console.log(N));
    }, [c]),
    stopRecording: () => {
      i == null || i.stop(), D(), o(0), t(!1), j(!1);
    },
    togglePauseResume: () => {
      M ? (j(!1), i == null || i.resume(), w()) : (j(!0), D(), i == null || i.pause());
    },
    recordingBlob: C,
    isRecording: a,
    isPaused: M,
    recordingTime: z
  };
}, l = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", x = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", v = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", Y = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3Ljg1IDMuMTVsLTIuOTktM0EuNTA4LjUwOCAwIDAgMCAxNC41IDBIMS40QTEuNDE3IDEuNDE3IDAgMCAwIDAgMS40M3YxNS4xNEExLjQxNyAxLjQxNyAwIDAgMCAxLjQgMThoMTUuMmExLjQxNyAxLjQxNyAwIDAgMCAxLjQtMS40M1YzLjVhLjQ3LjQ3IDAgMCAwLS4xNS0uMzV6TTIgNVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6bTcgMTFhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiIvPgo8L3N2Zz4K", b = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==";
const O = ({
  onRecordingComplete: a,
  recorderControls: t,
  classes: M
}) => {
  var D, r, s, S, N, e;
  const {
    startRecording: j,
    stopRecording: z,
    togglePauseResume: o,
    recordingBlob: i,
    isRecording: g,
    isPaused: c,
    recordingTime: I
  } = t != null ? t : n(), [C, u] = d(!1), w = (T = !0) => {
    u(T), z();
  };
  return A(() => {
    (C || t) && i != null && a != null && a(i);
  }, [i]), /* @__PURE__ */ L.createElement("div", {
    className: `audio-recorder ${g ? "recording" : ""} ${(D = M == null ? void 0 : M.AudioRecorderClass) != null ? D : ""}`,
    "data-testid": "audio_recorder"
  }, /* @__PURE__ */ L.createElement("img", {
    src: g ? Y : l,
    className: `audio-recorder-mic ${(r = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? r : ""}`,
    onClick: g ? () => w() : j,
    "data-testid": "ar_mic",
    title: g ? "Save recording" : "Start recording"
  }), /* @__PURE__ */ L.createElement("span", {
    className: `audio-recorder-timer ${g ? "" : "display-none"} ${(s = M == null ? void 0 : M.AudioRecorderTimerClass) != null ? s : ""}`,
    "data-testid": "ar_timer"
  }, Math.floor(I / 60), ":", String(I % 60).padStart(2, "0")), /* @__PURE__ */ L.createElement("span", {
    className: `audio-recorder-status ${g ? "" : "display-none"} ${(S = M == null ? void 0 : M.AudioRecorderStatusClass) != null ? S : ""}`
  }, /* @__PURE__ */ L.createElement("span", {
    className: "audio-recorder-status-dot"
  }), "Recording"), /* @__PURE__ */ L.createElement("img", {
    src: c ? v : x,
    className: `audio-recorder-options ${g ? "" : "display-none"} ${(N = M == null ? void 0 : M.AudioRecorderPauseResumeClass) != null ? N : ""}`,
    onClick: o,
    title: c ? "Resume recording" : "Pause recording",
    "data-testid": "ar_pause"
  }), /* @__PURE__ */ L.createElement("img", {
    src: b,
    className: `audio-recorder-options ${g ? "" : "display-none"} ${(e = M == null ? void 0 : M.AudioRecorderDiscardClass) != null ? e : ""}`,
    onClick: () => w(!1),
    title: "Discard Recording",
    "data-testid": "ar_cancel"
  }));
};
export {
  O as AudioRecorder,
  n as useAudioRecorder
};
