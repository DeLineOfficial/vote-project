export interface PostContent {
    id: number,
	title: string,
	content: string,
	author_id: number,
    likes: number,
    dislikes: number,
	rating: number,
    published_at: Date,
	updated_at: Date
}

export interface GetPosts {
    posts: PostContent[],
    total_pages: number
}