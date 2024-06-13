enum PageTypeEnum {
    Home = 'Home',
    About = 'About',
    Resume = 'Resume',
    Projects = 'Projects',
    Contact = 'Contact',
}

class PageType {
    constructor(public type: PageTypeEnum) { }

    get title(): string {
        return this.type;
    }

    get href(): string {
        return `#${this.type}`;
    }

    get iconClass(): string {
        switch (this.type) {
            case PageTypeEnum.Home:
                return 'solid fa-home';
            case PageTypeEnum.About:
                return 'solid fa-user';
            case PageTypeEnum.Resume:
                return 'fa-regular fa-file-lines';
            case PageTypeEnum.Projects:
                return 'fa-solid fa-diagram-project';
            case PageTypeEnum.Contact:
                return 'solid fa-address-card';
            default:
                return '';
        }
    }

    static getAllPageTypes(): PageType[] {
        return Object.values(PageTypeEnum).map(type => new PageType(type));
    }
}

export { PageType, PageTypeEnum };
