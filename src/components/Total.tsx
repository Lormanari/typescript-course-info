import React from "react";
import {coursePart, courseParts} from '../../types';

const Total: React.FC<courseParts> = ({courses}) => {
	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<p>Number of exercises {courses.reduce((carry: any, part: coursePart) => carry + part.exerciseCount, 0)}
		</p>
	)
}


export default Total;