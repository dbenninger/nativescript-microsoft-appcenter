import { Observable } from "tns-core-modules/data/observable";

export interface AppCenterSettings {
    appSecret?: string;
    analytics?: boolean;
    crashes?: boolean;
}
export interface TrackProperties {
    key: string;
    value: string;
}
export declare class AppCenter {
    start(settings: AppCenterSettings): void;
    startWithAppDelegate(settings: AppCenterSettings): void;
    getInstallId(): string;
    isEnabled(): boolean;
    disable(): void;
}
export declare class AppCenterAnalytics {
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    trackEvent(eventName: string, properties?: TrackProperties[]): void;
}
export declare class AppCenterCrashes {
    disable(): void;
    enable(): void;
    isEnabled(): boolean;
    hasCrashedInLastSession(): boolean;
    generateTestCrash(): void;
}