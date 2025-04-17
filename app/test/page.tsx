"use client"

import { useState } from "react";
import { ProgressBar } from "../ui/progress-bar";
import { useRouter } from "next/navigation";
import Question from "../ui/question";
import questions from "../questions";

export default function Page() {
    const router = useRouter();
    const [index, setIndex] = useState(0);

    const handleAnswer = (answer: string) => {
        console.log("User answered:", answer);
        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            console.log("Quiz complete!");
            router.push("/end");
        }
    };

    return (
        <div>
            <ProgressBar percentage={100 * (index + 1) / questions.length} />
            <Question index={index + 1} question={questions[index]['question']} answers={questions[index]['answers']} onAnswer={(answer) => handleAnswer(answer)} />
        </div>
    );
}