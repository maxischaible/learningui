export interface Video {
    videoTitle: string;
    videoFramePath: string;
}

export const fetchVideos = async (): Promise<Video[]> => {
    // Simulierte API-Antwort
    return [
        { videoTitle: "Data collection of refugees", videoFramePath: "video1.PNG" },
        { videoTitle: "Modify existing refugees", videoFramePath: "video2.PNG" },
        { videoTitle: "Add new refugees", videoFramePath: "video3.PNG" },
        { videoTitle: "Invite new Employeess", videoFramePath: "video4.PNG" },
    ];
};
