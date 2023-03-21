(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;width:40px;display:flex;align-items:center;transition:all .2s ease-in}.audio-recorder-mic{color:#000;padding:0;width:40px;height:40px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}.audio-recorder-mic-button{width:50px;height:50px;border-radius:50%;background-color:#ebebeb;cursor:pointer;padding:15px;display:flex;align-items:center;justify-content:center}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import d, { useState as j, useRef as l, useCallback as v, useEffect as k } from "react";
const A = () => {
  const [w, N] = j(!1), [M, r] = j(!1), [m, I] = j(0), i = l(), [t, L] = j(), [z, D] = j(), C = () => {
    const e = setInterval(() => {
      I((c) => c + 1);
    }, 1e3);
    L(e);
  }, n = () => {
    t != null && clearInterval(t), L(void 0);
  };
  return {
    startRecording: v(() => {
      t == null && navigator.mediaDevices.getUserMedia({ audio: !0 }).then((e) => {
        var u, o, a;
        const c = [];
        i.current = new MediaRecorder(e), (u = i.current) == null || u.addEventListener("dataavailable", (g) => {
          g.data.size > 0 && c.push(g.data);
        }), (o = i.current) == null || o.addEventListener("stop", () => {
          var g;
          D(
            new Blob(c, { type: (g = i.current) == null ? void 0 : g.mimeType })
          ), i.current = null;
        }), (a = i.current) == null || a.start(), C(), N(!0);
      }).catch((e) => console.log(e));
    }, [t]),
    stopRecording: () => {
      var e;
      (e = i == null ? void 0 : i.current) == null || e.stop(), n(), I(0), N(!1), r(!1);
    },
    togglePauseResume: () => {
      var e, c;
      M ? (r(!1), (e = i == null ? void 0 : i.current) == null || e.resume(), C()) : (r(!0), n(), (c = i == null ? void 0 : i.current) == null || c.pause());
    },
    recordingBlob: z,
    isRecording: w,
    isPaused: M,
    recordingTime: m
  };
}, T = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", b = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", Y = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", O = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==";
const B = ({
  onRecordingComplete: w,
  recorderControls: N,
  classes: M
}) => {
  var y, S, s, e, c, u, o, a;
  const {
    startRecording: r,
    stopRecording: m,
    togglePauseResume: I,
    recordingBlob: i,
    isRecording: t,
    isPaused: L,
    recordingTime: z
  } = N != null ? N : A(), [D, C] = j(!1), n = (g = !0) => {
    C(g), m();
  };
  return k(() => {
    (D || N) && i != null && w != null && w(i);
  }, [i]), t ? /* @__PURE__ */ d.createElement("div", {
    className: `audio-recorder ${t ? "recording" : ""} ${(s = M == null ? void 0 : M.AudioRecorderClass) != null ? s : ""}`,
    "data-testid": "audio_recorder"
  }, t ? /* @__PURE__ */ d.createElement("span", {
    className: `audio-recorder-status ${t ? "" : "display-none"} ${(e = M == null ? void 0 : M.AudioRecorderStatusClass) != null ? e : ""}`
  }, /* @__PURE__ */ d.createElement("span", {
    className: "audio-recorder-status-dot"
  }), "Recording") : /* @__PURE__ */ d.createElement("img", {
    src: T,
    className: `audio-recorder-mic ${(c = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? c : ""}`,
    onClick: r,
    "data-testid": "ar_mic",
    title: "start recording"
  }), /* @__PURE__ */ d.createElement("span", {
    className: `audio-recorder-timer ${t ? "" : "display-none"} ${(u = M == null ? void 0 : M.AudioRecorderTimerClass) != null ? u : ""}`,
    "data-testid": "ar_timer"
  }, Math.floor(z / 60), ":", String(z % 60).padStart(2, "0")), /* @__PURE__ */ d.createElement("img", {
    src: L ? Y : b,
    className: `audio-recorder-options ${t ? "" : "display-none"} ${(o = M == null ? void 0 : M.AudioRecorderPauseResumeClass) != null ? o : ""}`,
    onClick: I,
    title: L ? "Resume recording" : "Pause recording",
    "data-testid": "ar_pause"
  }), /* @__PURE__ */ d.createElement("img", {
    src: O,
    className: `audio-recorder-options ${t ? "" : "display-none"} ${(a = M == null ? void 0 : M.AudioRecorderDiscardClass) != null ? a : ""}`,
    onClick: () => n(!0),
    title: "Discard Recording",
    "data-testid": "ar_cancel"
  })) : /* @__PURE__ */ d.createElement("div", {
    className: `audio-recorder-mic-button ${(y = M == null ? void 0 : M.AudioRecorderClass) != null ? y : ""}`,
    onClick: r
  }, /* @__PURE__ */ d.createElement("img", {
    src: T,
    className: `audio-recorder-mic ${(S = M == null ? void 0 : M.AudioRecorderStartSaveClass) != null ? S : ""}`,
    "data-testid": "ar_mic",
    title: "start recording"
  }));
};
export {
  B as AudioRecorder,
  A as useAudioRecorder
};
