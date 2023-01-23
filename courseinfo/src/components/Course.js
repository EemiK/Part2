const Header = ({ course }) => {
    return (
        <h2>{course}</h2>
    )
}

const Part = ({ part, exercise }) => {
    return (
        <p>{part} {exercise}</p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part.name} exercise={part.exercises} />
            )}
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <strong>
            total of {parts.map(p => p.exercises).reduce((s, a) => s + a)} excercises
        </strong>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course