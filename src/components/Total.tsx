import React from "react";
import {CoursePart, CourseParts} from '../types';

const Total: React.FC<CourseParts> = ({courses}) => {
	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<p>Number of exercises {courses.reduce((carry: any, part: CoursePart) => carry + part.exerciseCount, 0)}
		</p>
	)
}


export default Total;