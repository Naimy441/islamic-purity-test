"use client"

import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { ProgressBar } from "./progress-bar";
import { CardSkeleton } from "./skeletons";
import Question from "./question";

export default function Quiz({questions}:{questions: any[]}) {
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
            <div className="px-8">
                <Question index={index + 1} question={questions[index]['question']} answers={questions[index]['answers']} onAnswer={(answer) => handleAnswer(answer)} />
            </div>
        </div>
    );
}