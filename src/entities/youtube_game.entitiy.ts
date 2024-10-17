import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity()
class YoutubeGame {
	@PrimaryColumn({ type: 'tinyint' })
	rank: number;

	@Column({ type: 'varchar', length: 50 })
	id: string;

	@Column({ type: 'varchar', length: 100 })
	title: string;

	@Column({ name: 'thumbnails_url', type: 'varchar', length: 100 })
	thumbnailsUrl: string;

	@Column({ name: 'view_count', type: 'int' })
	viewCount: number;

	@Column({ name: 'comment_count', type: 'int' })
	commentCount: number;

	@CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
	updatedAt: Date;
}
export default YoutubeGame;
