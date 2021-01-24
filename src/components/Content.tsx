import React from "react";
import {coursePart, courseParts} from '../../types';

const SingleContent: React.FC<coursePart> = ({name, exerciseCount}) => (
	<p>{name} {exerciseCount}</p>
)

const Content: React.FC<courseParts> = ({courses}) => {
	return <>
		{courses.map((course: coursePart) =>
			<SingleContent key={course.name} name={course.name} exerciseCount={course.exerciseCount} />
		)}
	</>
}

export default Content;