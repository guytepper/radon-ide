import pixel9 from "../../assets/pixel_9/skin.webp";
import pixel9mask from "../../assets/pixel_9/mask.png";
import pixel8 from "../../assets/pixel_8/skin.webp";
import pixel8mask from "../../assets/pixel_8/mask.png";
import pixel7 from "../../assets/pixel_7/skin.webp";
import pixel7mask from "../../assets/pixel_7/mask.png";
import pixel6a from "../../assets/pixel_6a/skin.webp";
import pixel6amask from "../../assets/pixel_6a/mask.png";
import iphone15pro from "../../assets/iphone_15_pro/skin.webp";
import iphone15promask from "../../assets/iphone_15_pro/mask.png";
import iphoneSE from "../../assets/iphone_SE/skin.webp";
import iphoneSEmask from "../../assets/iphone_SE/mask.png";
import { DevicePlatform } from "../../common/DeviceManager";

export type DeviceProperties = {
  modelName: string;
  modelId: string;
  platform: DevicePlatform;
  screenWidth: number;
  screenHeight: number;
  frameWidth: number;
  frameHeight: number;
  offsetX: number;
  offsetY: number;
  frameImage: string;
  maskImage: string;
};

// Model identifiers for new devices are sourced from 'hw.device.name'
// in config.ini for Android and 'deviceType' in device.plist for iOS.

// iOS devices names should match supportedDeviceTypes inside the runtime
export const iOSSupportedDevices: DeviceProperties[] = [
  {
    modelName: "iPhone 15 Pro",
    modelId: "com.apple.CoreSimulator.SimDeviceType.iPhone-15-Pro",
    platform: DevicePlatform.IOS,
    screenWidth: 1179,
    screenHeight: 2556,
    frameWidth: 1285,
    frameHeight: 2663,
    offsetX: 55,
    offsetY: 55,
    frameImage: iphone15pro,
    maskImage: iphone15promask,
  },
  {
    modelName: "iPhone SE (3rd generation)",
    modelId: "com.apple.CoreSimulator.SimDeviceType.iPhone-SE-3rd-generation",
    platform: DevicePlatform.IOS,
    screenWidth: 750,
    screenHeight: 1334,
    frameWidth: 874,
    frameHeight: 1780,
    offsetX: 62,
    offsetY: 222,
    frameImage: iphoneSE,
    maskImage: iphoneSEmask,
  },
] as const;

export const AndroidSupportedDevices: DeviceProperties[] = [
  {
    modelName: "Google Pixel 9",
    modelId: "pixel_9",
    platform: DevicePlatform.Android,
    screenWidth: 1080,
    screenHeight: 2424,
    frameWidth: 1198,
    frameHeight: 2531,
    offsetX: 55,
    offsetY: 58,
    frameImage: pixel9,
    maskImage: pixel9mask,
  },
  {
    modelName: "Google Pixel 8",
    modelId: "pixel_8",
    platform: DevicePlatform.Android,
    screenWidth: 1080,
    screenHeight: 2400,
    frameWidth: 1187,
    frameHeight: 2513,
    offsetX: 49,
    offsetY: 55,
    frameImage: pixel8,
    maskImage: pixel8mask,
  },
  {
    modelName: "Google Pixel 7",
    modelId: "pixel_7",
    platform: DevicePlatform.Android,
    screenWidth: 1080,
    screenHeight: 2400,
    frameWidth: 1200,
    frameHeight: 2541,
    offsetX: 59,
    offsetY: 58,
    frameImage: pixel7,
    maskImage: pixel7mask,
  },
  {
    modelName: "Google Pixel 6a",
    modelId: "pixel_6a",
    platform: DevicePlatform.Android,
    screenWidth: 1080,
    screenHeight: 2400,
    frameWidth: 1207,
    frameHeight: 2555,
    offsetX: 57,
    offsetY: 69,
    frameImage: pixel6a,
    maskImage: pixel6amask,
  },
] as const;

export function mapIdToModel(deviceId: string): string {
  let device =
    iOSSupportedDevices.find((d) => d.modelId === deviceId) ||
    AndroidSupportedDevices.find((d) => d.modelId === deviceId);

  if (device) {
    return device.modelName;
  } else {
    throw new Error("Device id not recognized");
  }
}
