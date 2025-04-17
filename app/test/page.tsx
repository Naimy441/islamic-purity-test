"use client"

import { useState } from "react";
import { ProgressBar } from "../ui/progress-bar";
import Question from "../ui/question";

export default function Page() {
    const questions = [
        { question: "Are you a Muslim?", answers: ["Yes", "No"] },
        { question: "Do you pray daily?", answers: ["Yes", "No", "Sometimes"] },
        { question: "Where were you born?", answers: ["America", "Middle East", "Allah Knows Best"] },
    ];
    const [index, setIndex] = useState(0);

    const handleAnswer = (answer: string) => {
        console.log("User answered:", answer);
        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            console.log("Quiz complete!");
        }
    };

    return (
        <div>
            <ProgressBar percentage={100 * (index + 1) / questions.length} />
            <Question index={index + 1} question={questions[index]['question']} answers={questions[index]['answers']} onAnswer={(answer) => handleAnswer(answer)} />
        </div>
    );
}