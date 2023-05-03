import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
	vertical-align: 'middle';
`;

const AppLayout = ({ children }) => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item>
					<Link href="/">노드버드</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/profile">프로필</Link>
				</Menu.Item>
				<Menu.Item>
					<Input.Search enterButton />
				</Menu.Item>
				<Menu.Item>
					<Link href="/signup">회원가입</Link>
				</Menu.Item>
			</Menu>
			<Row gutter={8}>
				<Col xs={24} md={6}>
					{isLoggedIn ? <UserProfile /> : <LoginForm />}
				</Col>
				<Col xs={24} md={12}>
					{children}
				</Col>
				<Col xs={24} md={6}>
					<a
						href="https://www.zerocho.com"
						target="_blank"
						rel="noreferrer noopener"
					>
						Made by ZeroCho
					</a>
				</Col>
			</Row>
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppLayout;
