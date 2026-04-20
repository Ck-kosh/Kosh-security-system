
import { getCameraStatus } from './cameraUtils';

describe('CCTV System Logic Tests', () => {

  test('should return OFFLINE if the camera is disconnected', () => {
    const mockCamera = { isConnected: false, isRecording: true };
    expect(getCameraStatus(mockCamera)).toBe('OFFLINE');
  });

  test('should return ALERT if motion is detected while recording', () => {
    const mockCamera = { 
      isConnected: true, 
      isRecording: true, 
      motionDetected: true 
    };
    expect(getCameraStatus(mockCamera)).toBe('ALERT');
  });

  test('should return IDLE if connected but not recording', () => {
    const mockCamera = { 
      isConnected: true, 
      isRecording: false, 
      motionDetected: false 
    };
    expect(getCameraStatus(mockCamera)).toBe('IDLE');
  });

});