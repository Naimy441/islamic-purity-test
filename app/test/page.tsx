import { get } from '@vercel/edge-config';
import Quiz from "../ui/quiz";

export default async function Page() {
    const questions = await get('test');

    if (!questions || !Array.isArray(questions)) {
        throw new Error("Unable to load questions.");
    }
    
    return <Quiz questions={questions} />;
}