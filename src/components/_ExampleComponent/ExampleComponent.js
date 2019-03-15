// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class ExampleComponent extends Component {
	render() {
		return (
			<ExampleComponentContainer>
				<StyledLink to="/">Hi</StyledLink>
			</ExampleComponentContainer>
		);
	}
}

export default ExampleComponent;

const ExampleComponentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	text-decoration: none;

	&:hover {
		color: blue;
	}
`;
