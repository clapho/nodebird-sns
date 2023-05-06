export const initialState = {
	mainPosts: [
		{
			id: 1,
			User: {
				id: 1,
				nickname: '제로초',
			},
			content: '첫 번째 게시글 #해시태그 #익스프레스',
			Images: [
				{
					src: 'https://images.unsplash.com/photo-1682687220161-e3e7388e4fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
				},
				{
					src: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
				},
				{
					src: 'https://plus.unsplash.com/premium_photo-1682542226222-d104741d7d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2017&q=80',
				},
			],
			Comments: [
				{
					User: {
						nickname: 'nero',
					},
					content: '우와 개정판이 나왔군요~',
				},
				{
					User: {
						nickname: 'hero',
					},
					content: '얼른 사고 싶어요~',
				},
			],
		},
	],
	imagePaths: [],
	addPostLoading: false,
	addPostDone: false,
	addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
	// 액션 크리에이터
	type: ADD_POST_REQUEST,
	data,
});

export const addComment = (data) => ({
	type: ADD_COMMENT_REQUEST,
	data,
});

const dummyPost = {
	id: 2,
	content: '더미데이터입니다',
	User: {
		id: 1,
		nickname: '제로초',
	},
	Images: [],
	Comments: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_REQUEST:
			return {
				...state,
				addPostLoading: true,
				addPostDone: false,
				addPostError: null,
			};
		case ADD_POST_SUCCESS:
			return {
				...state,
				mainPosts: [dummyPost, ...state.mainPosts],
				addPostLoading: false,
				addPostDone: true,
			};
		case ADD_POST_FAILURE:
			return {
				...state,
				addPostLoading: false,
				addPostError: action.error,
			};
		case ADD_COMMENT_REQUEST:
			return {
				...state,
				addCommentLoading: true,
				addCommentDone: false,
				addCommentError: null,
			};
		case ADD_COMMENT_SUCCESS:
			return {
				...state,
				mainComments: [dummyPost, ...state.mainComments],
				addCommentLoading: false,
				addCommentDone: true,
			};
		case ADD_COMMENT_FAILURE:
			return {
				...state,
				addCommentLoading: false,
				addCommentError: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
