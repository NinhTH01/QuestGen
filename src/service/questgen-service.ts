import React from "react";
import { questgenRepository } from "../repository/questgen-repository";

export function useQuestgen(
  route: number
): [
  answer: any,
  setAnswer: React.Dispatch<any>,
  handleQuestGen: (context: string, questType: string, level: string) => void,
  handleChange: (
    indexAnswer: number,
    indexQuestion: number
  ) => (e: any) => void,
  handleChecked: (indexAnswer: number, indexQuestion: number) => () => void,
  handleChangeQuestion: (indexQuestion: number) => (e: any) => void
] {
  const [answer, setAnswer] = React.useState<any>([]);

  // const [loading, setLoading] = React.useState<boolean>(false);

  const handleFindCorrectIndex = React.useCallback((r: any, level: string) => {
    let result: any;
    if (level === "0") {
      result = r["easy"];
    } else if (level === "1") {
      result = r["medium"];
    } else {
      result = r["hard"];
    }

    result = result.map((r: any) => {
      const correctIndex = r?.options?.findIndex((value: any) => {
        return value === r["true option"][0];
      });

      r = {
        ...r,
        correctAnswerIndices: [correctIndex],
      };

      return r;
    });

    setAnswer(result);
  }, []);

  const handleGenQuest = React.useCallback(
    async (context: string, questType: string, level: string) => {
      const data = {
        text: context,
        quest_type: "multiple choice",
        easy: 1,
        medium: 0,
        hard: 0,
      };

      console.log(data);

      if (
        context !== "" &&
        !isNaN(Number(questType)) &&
        !isNaN(Number(level))
      ) {
        try {
          const response = questgenRepository.product(data);

          response.then((r) => {
            handleFindCorrectIndex(r, level);
          });
        } catch (error: any) {
          console.error(`API Error: ${error?.message}`);
        }
      }
    },
    [handleFindCorrectIndex]
  );

  const handleChange = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => (e: any) => {
      if (route === 0 || route === 1) {
        answer[indexQuestion].options[indexAnswer] = e.target.value;

        setAnswer([...answer]);
      }
    },
    [answer, route]
  );

  const handleChecked = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => () => {
      console.log(indexQuestion, indexAnswer);
      if (route === 0) {
        answer[indexQuestion].correctAnswerIndices = [indexAnswer];
        setAnswer([...answer]);
        console.log(answer);
      }
    },
    [answer, route]
  );

  const handleChangeQuestion = React.useCallback(
    (indexQuestion: number) => (e: any) => {
      if (route === 0 || route === 1 || route === 2) {
        answer[indexQuestion].question = e.target.value;
        console.log(answer);
        setAnswer([...answer]);
      }
    },
    [answer, route]
  );

  return [
    answer,
    setAnswer,
    handleGenQuest,
    handleChange,
    handleChecked,
    handleChangeQuestion,
  ];
}
