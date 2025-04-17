import { Button } from "./button";

interface QuestionProps {
    index : number,
    question: string,
    answers: Array<string>,
    onAnswer: (answer: string) => void,
}

export default function Question({index, question, answers, onAnswer} : QuestionProps) {    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
            <div className="text-3xl">
                Question {index} - {question}
            </div>
            {answers.map((answer, index) => (
                <Button key={index} onClick={() => onAnswer(answer)}>{answer}</Button>
            ))}
        </div>
    );
}