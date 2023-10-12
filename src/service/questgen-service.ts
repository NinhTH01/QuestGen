import React from "react";
import { questgenRepository } from "../repository/questgen-repository";
import { bloomData, data } from "../sample/data/sampleGen";

export function useQuestgen(
  route: number
): [
  answer: any,
  setAnswer: React.Dispatch<any>,
  handleQuestGenFromText: (
    context: string,
    questType: string,
    level: string,
    count: number
  ) => void,
  hhandleQuestGenFromFile: (
    context: any,
    questType: string,
    level: string,
    count: number
  ) => void,
  handleChange: (
    indexAnswer: number,
    indexQuestion: number
  ) => (e: any) => void,
  handleChecked: (indexAnswer: number, indexQuestion: number) => () => void,
  handleChangeQuestion: (indexQuestion: number) => (e: any) => void
] {
  const [answer, setAnswer] = React.useState<any>([]);

  const [res, setRes] = React.useState<any>(bloomData);

  // console.log(res);

  // const [loading, setLoading] = React.useState<boolean>(false);

  const handleFindCorrectIndex = React.useCallback(
    (r: any) => {
      if (route === 0) {
        const finalResult = r?.map((result: any) => {
          const correctIndex = result?.options?.findIndex((value: any) => {
            return value === result["true option"][0];
          });
          result = {
            ...result,
            correctAnswerIndices: correctIndex,
          };
          return result;
        });
        setAnswer(finalResult);
      } else {
        setAnswer(r);
      }
    },
    [route]
  );

  const handleGenQuestFromText = React.useCallback(
    async (
      context: string,
      questType: string,
      level: string,
      count: number
    ) => {
      let data: any = [];

      if (level === "0") {
        data = {
          text: context,
          quest_type: questType,
          easy: count,
          medium: 0,
          hard: 0,
          language: "english",
        };
      } else if (level === "1") {
        data = {
          text: context,
          quest_type: questType,
          easy: 0,
          medium: count,
          hard: 0,
          language: "english",
        };
      } else {
        data = {
          text: context,
          quest_type: questType,
          easy: 0,
          medium: 0,
          hard: count,
          language: "english",
        };
      }

      if (context !== "" && !isNaN(Number(level))) {
        try {
          // const response = questgenRepository.textGen(data);
          // response.then((r) => {
          //   // setRes(r);
          //   handleFindCorrectIndex(r);
          // });
          handleFindCorrectIndex(res);
        } catch (error: any) {
          console.error(`API Error: ${error?.message}`);
        }
      }
    },
    [handleFindCorrectIndex, res]
  );

  const handleGenQuestFromFile = React.useCallback(
    async (
      context: any,
      questType: string,
      level: string,
      count: number
    ) => {

      const formData = new FormData();

      if (level === "0") {
        formData.append(`file`, context, context.name);
        formData.append('language', 'english');
        formData.append('easy', `${count}`);
        formData.append('medium', '0');
        formData.append('hard', '0');
        formData.append('quest_type', `${questType}`);
      } else if (level === "1") {
        formData.append(`file`, context, context.name);
        formData.append('language', 'english');
        formData.append('easy', `0`);
        formData.append('medium', `${count}`);
        formData.append('hard', '0');
        formData.append('quest_type', `${questType}`);
      } else {
        formData.append(`file`, context, context.name);
        formData.append('language', 'english');
        formData.append('easy', `0`);
        formData.append('medium', '0');
        formData.append('hard', `${count}`);
        formData.append('quest_type', `${questType}`);
      }

        // try {
        //   const response = questgenRepository.fileGen(formData);
        //   response.then((r) => {
        //     handleFindCorrectIndex(r);
        //   });   
        // } catch (error: any) {
        //   console.error(`API Error: ${error?.message}`);
        // }
      
    },
    [handleFindCorrectIndex]
  );

  const handleChange = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => (e: any) => {
      if (route === 0) {
        answer[indexQuestion].options[indexAnswer] = e.target.value;

        setAnswer([...answer]);
      }
    },
    [answer, route]
  );

  const handleChecked = React.useCallback(
    (indexAnswer: number, indexQuestion: number) => () => {
      console.log(indexAnswer, indexQuestion);
      if (route === 0) {
        answer[indexQuestion].correctAnswerIndices = indexAnswer;
        setAnswer([...answer]);
      } else if (route === 1) {
        answer[indexQuestion].answer = indexAnswer === 1 ? "False" : "True";
      }
    },
    [answer, route]
  );

  const handleChangeQuestion = React.useCallback(
    (indexQuestion: number) => (e: any) => {
      if (route === 0 || route === 1 || route === 2) {
        answer[indexQuestion].question = e.target.value;
        setAnswer([...answer]);
      }
    },
    [answer, route]
  );

  return [
    answer,
    setAnswer,
    handleGenQuestFromText,
    handleGenQuestFromFile,
    handleChange,
    handleChecked,
    handleChangeQuestion,
  ];
}
