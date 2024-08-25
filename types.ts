export interface SidebarLink {
    text: string;
    link: string;
}

export interface SidebarContentGroup {
    name: string; // The text to be displayed in the sidebar
    icon: string; // The title to display in the table of contents
    description: string; // Description for the table of contents
    items: SidebarLink[];
}

// Possible content groups
export type SideBarContentGroups = Record<"guides" | "methods" | "resources", SidebarContentGroup>;
