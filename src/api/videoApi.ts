export interface Video {
    videoTitle: string;
    videoFramePath: string;
    videoId: string;
}

export const fetchVideos = async (): Promise<Video[]> => {
    // Simulierte API-Antwort
    return [
        { videoTitle: "Data collection of refugees", videoFramePath: "video1.PNG", videoId: "123e4567-e89b-12d3-a456-426614174000" },
        { videoTitle: "Modify existing refugees", videoFramePath: "video2.PNG", videoId: "123e4567-e89b-12d3-a456-426614174001" },
        { videoTitle: "Add new refugees", videoFramePath: "video3.PNG", videoId: "123e4567-e89b-12d3-a456-426614174002" },
        { videoTitle: "Invite new Employeess", videoFramePath: "video4.PNG", videoId: "123e4567-e89b-12d3-a456-426614174003" },
    ];
};
