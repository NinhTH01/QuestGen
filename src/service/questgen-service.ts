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

  const handleGenQuest = React.useCallback(
    async (context: string, questType: string, level: string) => {
      const data = {
        text: context,
        quest_type: "multiple choice",
        easy: 1,
        medium: 0,
        hard: 0,
      };

      if (
        context !== "" &&
        !isNaN(Number(questType)) &&
        !isNaN(Number(level))
      ) {
        try {
          const response = questgenRepository.product(data);
          console.log(
            response.then((r) => {
              if (level === "0") {
                setAnswer(r["easy"]);
              } else if (level === "1") {
                setAnswer(r["medium"]);
              } else {
                setAnswer(r["hard"]);
              }
              console.log(r["easy"]);
            })
          );
        } catch (error: any) {
          console.error(`API Error: ${error?.message}`);
        }
      }
    },
    []
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
      console.log(indexQuestion);
      if (route === 0) {
        answer[indexQuestion]["true option"] = [indexAnswer];
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
