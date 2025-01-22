export interface LinkedElement {
    icon: string;
    title: string;
    link: string;
    isWebLink: boolean;
}

export const fetchLinkedElements = async (videoId: string): Promise<LinkedElement[]> => {
    if (videoId === "123e4567-e89b-12d3-a456-426614174000") {
        return [
            { icon: "download-software.svg", title: "Download Software", link: "https://example.com/upload", isWebLink: true },
            { icon: "full_documentation.svg", title: "Get full documentation", link: "/files/software.zip", isWebLink: false },
            { icon: "best_practices.svg", title: "Best Practices from colleagues", link: "/files/best_practices.zip", isWebLink: false },
        ];
    } else {
        return [
            
            { icon: "tutorial.svg", title: "Video Tutorial", link: "https://example.com/tutorial", isWebLink: true },
        ];
    }
};
