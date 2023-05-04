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
	postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
	type: ADD_POST,
};

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
		case ADD_POST:
			return {
				...state,
				mainPosts: [dummyPost, ...state.mainPosts],
				postAdded: true,
			};
		default:
			return state;
	}
};

export default reducer;
