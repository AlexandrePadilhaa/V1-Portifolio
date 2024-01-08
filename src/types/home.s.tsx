export interface Image {
    alt: string,
    url: string
}

export interface Project {
    slug: string,
    name: string
    description: string,
    image: Image
}