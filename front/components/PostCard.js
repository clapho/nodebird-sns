import { Avatar, Card, Popover, Button, List, Comment } from 'antd';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
	RetweetOutlined,
	HeartOutlined,
	HeartTwoTone,
	MessageOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

import { REMOVE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
	const dispatch = useDispatch();
	const { removePostLoading } = useSelector((state) => state.post);

	const [liked, setLiked] = useState(false);
	const [commentFormOpened, setCommentFormOpened] = useState(false);

	const onToggleLike = useCallback(() => {
		setLiked((prev) => !prev);
	}, []);
	const onToggleComment = useCallback(() => {
		setCommentFormOpened((prev) => !prev);
	}, []);

	const onRemovePost = useCallback(() => {
		dispatch({
			type: REMOVE_POST_REQUEST,
			data: post.id,
		});
	}, []);

	const id = useSelector((state) => state.user.me?.id);

	return (
		<div style={{ marginBottom: 20 }}>
			<Card
				cover={post.Images[0] && <PostImages images={post.Images} />}
				actions={[
					<RetweetOutlined key="retweet" />,
					liked ? (
						<HeartTwoTone
							twoToneColor="#eb2f96"
							key="heart"
							onClick={onToggleLike}
						/>
					) : (
						<HeartOutlined key="heart" onClick={onToggleLike} />
					),
					<MessageOutlined key="comment" onClick={onToggleComment} />,
					<Popover
						key="more"
						content={
							<Button.Group>
								{id && post.User.id === id ? (
									<>
										<Button>수정</Button>
										<Button
											type="danger"
											loading={removePostLoading}
											onClick={onRemovePost}
										>
											삭제
										</Button>
									</>
								) : (
									<Button>신고</Button>
								)}
							</Button.Group>
						}
					>
						<EllipsisOutlined />
					</Popover>,
				]}
			>
				<Card.Meta
					avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
					title={post.User.nickname}
					description={<PostCardContent postData={post.content} />}
				/>
			</Card>
			{commentFormOpened && (
				<div>
					<CommentForm post={post} />
					<List
						header={`${post.Comments.length}개의 댓글`}
						itemLayout="horizontal"
						dataSource={post.Comments}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={<div>{item.User.nickname}</div>}
									avator={<Avatar>{item.User.nickname[0]}</Avatar>}
									description={item.content}
								/>
							</List.Item>
						)}
					/>
				</div>
			)}
		</div>
	);
};

PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
};

export default PostCard;
