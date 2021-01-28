import React from "react";
import { CourseParts, CoursePart } from '../types';
// import Part from './Part';

const assertNever = (value: never): never => {
	throw new Error(
		`Unhandled discriminated union member: ${JSON.stringify(value)}`
	);
};

const Content: React.FC<CourseParts> = ({courses}) => {
	return <>
		{courses.map((part: CoursePart) => {

			let course;
			switch (part.name) {
				case "Fundamentals":
					course = `${part.name}, ${part.exerciseCount}, ${part.description}`;
					break;
				case "Using props to pass data":
					course = `${part.name}, ${part.exerciseCount}, ${part.groupProjectCount}`;
					break;
				case "Deeper type usage":
					course = `${part.name}, ${part.exerciseCount}, ${part.description}, ${part.exerciseSubmissionLink}`;
					break;
				case "Advanced Types":
					course = `${part.name}, ${part.exerciseCount}, ${part.description}, ${part.score}`;
					break;
				default:
					return assertNever(part);
			}
			console.log(course);
			return <p key={part.name}>{course}</p>
		}
		)}
	</>
}

export default Content;