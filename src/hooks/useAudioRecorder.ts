import { useState, useCallback, useRef } from "react";

export interface recorderControls {
  startRecording: (onError?: (error: any) => void) => void;
  stopRecording: () => void;
  togglePauseResume: () => void;
  recordingBlob?: Blob;
  isRecording: boolean;
  isPaused: boolean;
  recordingTime: number;
  mediaRecorder?: MediaRecorder | null;
}

/**
 * @returns Controls for the recording. Details of returned controls are given below
 *
 * @details `startRecording`: Calling this method would result in the recording to start. Sets `isRecording` to true
 * @details `stopRecording`: This results in a recording in progress being stopped and the resulting audio being present in `recordingBlob`. Sets `isRecording` to false
 * @details `togglePauseResume`: Calling this method would pause the recording if it is currently running or resume if it is paused. Toggles the value `isPaused`
 * @details `recordingBlob`: This is the recording blob that is created after `stopRecording` has been called
 * @details `isRecording`: A boolean value that represents whether a recording is currently in progress
 * @details `isPaused`: A boolean value that represents whether a recording in progress is paused
 * @details `recordingTime`: Number of seconds that the recording has gone on. This is updated every second
 */
const useAudioRecorder: (deviceId?: string) => recorderControls = (
  deviceId = "default"
) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorder = useRef<MediaRecorder | null>();

  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();
  const [recordingBlob, setRecordingBlob] = useState<Blob>();

  const _startTimer: () => void = () => {
    const interval = setInterval(() => {
      setRecordingTime((time) => time + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const _stopTimer: () => void = () => {
    timerInterval != null && clearInterval(timerInterval);
    setTimerInterval(undefined);
  };

  /**
   * Calling this method would result in the recording to start. Sets `isRecording` to true
   */
  const startRecording: () => void = useCallback(
    (onError?: (error: any) => void) => {
      if (timerInterval != null) return;

      navigator.mediaDevices
        .getUserMedia({ audio: { deviceId } })
        .then((stream) => {
          const chunks: Blob[] = [];
          const mimeType = MediaRecorder.isTypeSupported("audio/webm")
            ? "audio/webm"
            : "audio/mp4";

          mediaRecorder.current = new MediaRecorder(stream, {
            mimeType: mimeType,
          });
          mediaRecorder.current?.addEventListener("dataavailable", (event) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
            }
          });
          mediaRecorder.current?.addEventListener("stop", () => {
            setRecordingBlob(
              new Blob(chunks, { type: mediaRecorder.current?.mimeType })
            );
            mediaRecorder.current = null;
          });

          mediaRecorder.current?.start();
          _startTimer();
          setIsRecording(true);
        })
        .catch((err) => {
          onError && onError(err);
        });
    },
    [timerInterval, deviceId]
  );

  /**
   * Calling this method results in a recording in progress being stopped and the resulting audio being present in `recordingBlob`. Sets `isRecording` to false
   */
  const stopRecording: () => void = () => {
    mediaRecorder?.current?.stop();
    // mediaRecorder?.current?.stream.getTracks().forEach((t) => t.stop());
    _stopTimer();
    setRecordingTime(0);
    setIsRecording(false);
    setIsPaused(false);
  };

  /**
   * Calling this method would pause the recording if it is currently running or resume if it is paused. Toggles the value `isPaused`
   */
  const togglePauseResume: () => void = () => {
    if (isPaused) {
      setIsPaused(false);
      mediaRecorder?.current?.resume();
      _startTimer();
    } else {
      setIsPaused(true);
      _stopTimer();
      mediaRecorder?.current?.pause();
    }
  };

  return {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder: mediaRecorder.current,
  };
};

export default useAudioRecorder;
